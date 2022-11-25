using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface IPostDataFieldValueRepository
    {

        void InsertPostDataFieldValue(PostDataFieldValue postDataFieldValue);
        void UpdatePostDataField(PostDataFieldValue postDataFieldValue);
        void DeletePostDataFieldValue(int id);
        Task<PostDataFieldValue> GetPostDataFieldValueById(Guid fieldId, Guid receiverId);
        Task<IEnumerable<PostDataFieldValue>> GetPostDataFieldValueByReceiverId(Guid receiverId);
        Task<PostDataFieldValue> GetPostDataFieldValueById(Guid fieldId);
        Task Save();
    }
}