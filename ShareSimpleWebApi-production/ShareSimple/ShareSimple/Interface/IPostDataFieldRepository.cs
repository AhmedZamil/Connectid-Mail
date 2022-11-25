using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface IPostDataFieldRepository
    {

        void InsertPostDataField(PostDataField postDataField);
        Task<IEnumerable<PostDataField>> GetPostDataFields(Guid postdataid);
        void UpdatePostDataField(PostDataField postDataField);
        void DeletePostDataField(Guid postDataFieldId);
        Task<PostDataField> GetPostDataFieldById(Guid fieldid);
        Task Save();
    }
}