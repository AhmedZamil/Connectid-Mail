import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonService, Storage, AdminService } from '../../services';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SurveillanceService } from '../../services/surveillance.service';

declare const fabric: any;

@Component({
  selector: 'app-superuser-surveillance',
  templateUrl: './superusersurveillance.component.html',
  styleUrls: ['./superusersurveillance.component.scss']
})
export class SuperuserSurveillanceComponent implements OnInit {
  lang: string;
  public logs = [];
  private logsSource = [];
  dialogComponent: any;
  searchForm: FormGroup;
  filterForm: FormGroup;
  loading = false;
  isEdit: boolean;
  public companies = [];
  public severities = [];
  public actionTypes = [];
  public messageTypes = [];
  public logDetail = {};
  displayLength = 10;
  currentPage = 1;
  entityCount = 0;
  entitystart = 1;
  entityend: number;

  constructor(
    private adminService: AdminService,
    private surveillanceService: SurveillanceService,
    private commonService: CommonService,
    private router: Router,
    route: ActivatedRoute,
    private fb: FormBuilder,
    private storage: Storage
  ) {
    this.searchForm = this.fb.group({
      searchText: ['']
    });
     this.filterForm = this.fb.group({
       maxResultCount: [100],
       logTimeFrom: [null],
       logTimeTo: [null],
       companyId: [null],
       severity: [null],
       actionName: ['All'],
       messageType: ['All']
     });
  }

  loadSurveillances() {
    const options = this.filterForm.getRawValue();
    if (options.companyId === 'null') {
      options.companyId = null;
    }
    if (options.severity === 'null') {
      options.severity = null;
    }
    if (options.actionName === 'All') {
      options.actionName = null;
    }
    if (options.messageType === 'All') {
      options.messageType = null;
    }
    if (options.maxResultCount === '0') {
      options.maxResultCount = null;
    }
    this.surveillanceService.getSurveillances(options).subscribe(data => {
      this.loading = false;
      this.logs = data;
      this.logsSource = this.logs;
      this.viewcounts();
    }, error => {
      this.loading = false;
    });
  }
  loadCompanies() {
    this.adminService.getCompanyList(false).subscribe(data => {
      this.loading = false;
      this.companies = [{id: null, name: 'All'}].concat(data);
    }, error => {
      this.loading = false;
    });
  }
  loadEnums() {
    this.surveillanceService.getEnums().subscribe(data => {
      this.loading = false;
      this.severities = [{id: null, name: 'All'}].concat(data.severities);
      this.actionTypes = ['All'].concat(data.actionTypes);
      this.messageTypes = ['All'].concat(data.messageTypes);
    }, error => {
      this.loading = false;
    });
  }
  ngOnInit() {
    this.loading = true;
    this.loadSurveillances();
    this.loadCompanies();
    this.loadEnums();
    this.searchForm.controls.searchText.valueChanges.subscribe(data => {
      const filterkey = data.toString().trim().toUpperCase();
      this.logs = (filterkey === '') ? this.logsSource :
        this.logsSource.filter(x =>
          (x.companyName && x.companyName.toString().toUpperCase().includes(filterkey)) ||
          (x.companyDomain && x.companyDomain.toString().toUpperCase().includes(filterkey)) ||
          (x.userName && x.userName.toString().toUpperCase().includes(filterkey)) ||
          (x.userEmail && x.userEmail.toString().toUpperCase().includes(filterkey)) ||
          (x.logMessage && x.logMessage.toString().toUpperCase().includes(filterkey)) ||
          (x.moduleName && x.moduleName.toString().toUpperCase().includes(filterkey)) ||
          (x.subModuleName && x.subModuleName.toString().toUpperCase().includes(filterkey)) ||
          (x.messageType && x.messageType.toString().toUpperCase().includes(filterkey)) ||
          (x.actionName && x.actionName.toString().toUpperCase().includes(filterkey)) ||
          (x.severityName && x.severityName.toString().toUpperCase().includes(filterkey))
        );
      this.currentPage = 1;
      this.entitystart = 1;
      this.viewcounts();
    });
    this.filterForm.valueChanges.subscribe(data => {
      this.loadSurveillances();
    });
  }
  ngAfterViewInit() {
    this.fabricInitialize();
  }
  pageChanged(pageNumber: number) {
    this.currentPage = pageNumber;
    this.entitystart = this.commonService.getStart(this.currentPage);
    this.entityend = this.commonService.getEnd(this.entitystart, this.entityCount);
  }

  viewcounts() {
    this.entityCount = this.logs.length;
    this.entityend = this.commonService.getEndForFirst(this.entityCount);
  }
  fabricInitialize() {
    const logDetailDialog = document.querySelector('.logdetaildialog');
    const dialog = logDetailDialog.querySelector('.ms-Dialog');
    this.dialogComponent = new fabric['Dialog'](dialog);
  }
  openLogDetailDialog(log) {
    this.fabricInitialize();
    if (log && log.id) {
      this.dialogComponent.open();
      this.loading = true;
      this.surveillanceService.getSurveillance(log.id).subscribe(data => {
        log = data;
        this.loading = false;
        this.logDetail = data;
      }, error => {
        this.loading = false;
      });
  }
    return false;
  }

}
