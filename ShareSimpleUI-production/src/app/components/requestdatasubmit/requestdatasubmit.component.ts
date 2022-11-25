import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RequestDataFrom } from '../../models';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService, Storage, PostdataService } from '../../services';
import { Router } from '@angular/router';
import { FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import config from '../../config';

@Component({
  selector: 'app-requestdatasubmit',
  templateUrl: './requestdatasubmit.component.html',
  styleUrls: ['./requestdatasubmit.component.scss']
})
export class RequestdatasubmitComponent implements OnInit {

  dataFrom: RequestDataFrom[] = [];
  requestDataForm: FormGroup;
  postdataId: string;
  sender: any;
  receiver: any;
  loading: boolean = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private cd: ChangeDetectorRef,
    private storage: Storage,
    private postdataService: PostdataService,
    public commonService: CommonService) {

    this.requestDataForm = this.fb.group({
      requestDataList: this.fb.array([])
    });

  }

  ngOnInit() {
    let component = this;
    this.loading = true;
    let otp = this.storage.get('otp');
    otp &&
      this.postdataService.getfiels(otp).subscribe(data => {

        if (data) {
          this.loading = false;
          this.dataFrom = data.fields;
          this.postdataId = data.postdataId;
          this.sender = data.sender;
          this.receiver = data.receiver;

          this.dataFrom.forEach(element => {
            let initrequestDataObject = this.fb.group({
              id: element.id,
              fieldName: element.fieldName,
              fieldType: element.fieldType,
              fieldValue: (element.fieldType == 'uploadfile') ? [[]] : ['']
            });
            this.requestDatas.push(initrequestDataObject);
          });

          let key = component.storage.get('key');
          component.postdataService.getshowpostdata(key, data.receiver.id).subscribe(
            sharedData => {
              sharedData.postDataFields.forEach(field => {
                let selecteddata = this.requestDatas.controls.find(x => x.value.id == field.id);
                if (field.fieldType === 'uploadfile' && field.fieldValues) {
                  field.fieldValues.forEach(fieldValue => {
                    let uploadFile = { id: fieldValue.fileId, file: { name: fieldValue.name }, uploaded: 'uploaded' };
                    selecteddata.value.fieldValue.push(uploadFile);
                  });
                }
              });
            },
            error => {
              console.log(error);
            }
          );
        }
      }, error => {
        this.loading = false;
      });
  }

  public dropped(event, id) {
    if (event.files.length > 0 && !this.loading) {
      for (const droppedFile of event.files) {
        if (droppedFile.fileEntry.isFile) {
          const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
          fileEntry.file((file: File) => {
            this.uploadFile(file, id);
            this.cd.detectChanges();
          });
        } else {
          const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
          console.log(droppedFile.relativePath, fileEntry);
        }
      }
    }
  }

  onFileChange(event, id) {
    let filecount = event.target.files && event.target.files.length;
    if (filecount > 0 && !this.loading) {
      for (let i = 0; i < filecount; i++) {
        this.uploadFile(event.target.files[i], id);
      }
    }
  }


  get requestDatas(): FormArray {
    return this.requestDataForm.get('requestDataList') as FormArray;
  };

  senddata() {
    this.loading = true;
    let postdatavalue = this.requestDatas.value.filter(x => x.fieldType !== 'uploadfile');
    postdatavalue = this.updateEmptyData(postdatavalue);
    let uploaddata = { id: this.postdataId, senderId: this.sender.id, receiverId: this.receiver.id, postDataFields: postdatavalue };

    this.postdataService.updatepostdatafield(uploaddata).subscribe(data => {
      if (data) {
        this.loading = false;
        this.router.navigate([config.routes.permissiongranted, 'p']);
      }
    }, error => {
      this.loading = false;
    });
  }

  uploadFile(file, id) {
    this.loading = true;
    let selecteddata = this.requestDatas.controls.find(x => x.value.id == id);
    let uploadFile = { id: selecteddata.value.fieldValue.length + 1, file: file, uploaded: 'uploading' };
    selecteddata.value.fieldValue.push(uploadFile);
    selecteddata.patchValue({ fieldValue: selecteddata.value.fieldValue });
    let uploaddata = { postDataId: this.postdataId, postDataFieldId: id, senderEmail: this.sender.email, file: file, receiverId: this.receiver.id };

    this.postdataService.uploadfile(uploaddata).subscribe(data => {
      if (data) {
        this.loading = false;
        selecteddata.value.fieldValue.find(x => x.id === uploadFile.id).uploaded = 'uploaded';
        selecteddata.value.fieldValue.find(x => x.id === uploadFile.id).id = data.fileId;
        selecteddata.value.fieldValue.find(x => x.id === uploadFile.id).fileName = data.fileName;
        selecteddata.patchValue({ fieldValue: selecteddata.value.fieldValue });
        this.cd.detectChanges();
      }
    }, error => {
      this.loading = false;
      selecteddata.value.fieldValue.find(x => x.id === uploadFile.id).uploaded = (error.error && error.error.text) || 'failed';
      selecteddata.patchValue({ fieldValue: selecteddata.value.fieldValue });
      this.cd.detectChanges();
    });
  }

  removefile(fileid, fieldid) {
    this.loading = true;
    let selecteddata = this.requestDatas.controls.find(x => x.value.id == fieldid);
    let index = selecteddata.value.fieldValue.findIndex(f => f.id === fileid);

    this.postdataService.deletepostdatafile(fileid).subscribe(data => {
      if (data) {
        selecteddata.value.fieldValue.splice(index, 1);
        this.loading = false;
        this.cd.detectChanges();
      }
    }, error => {
      this.loading = false;
    });
  }

  updateEmptyData(data) {
    data.forEach(element => {
      (element.fieldValue == '') &&
        (element.fieldValue = 'No data provided')
    });
    return data;
  }

}
