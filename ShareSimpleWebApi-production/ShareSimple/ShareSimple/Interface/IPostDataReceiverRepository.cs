using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface IPostDataReceiverRepository
    {
        void InsertPostDataReceiver(PostDataReceivers postDataReceivers);
        void DeletePostDataReceiver(Guid postDataReceiverId);
        void UpdatePostDataReceiver(PostDataReceivers postDataReceiver);
        Task<IEnumerable<PostDataReceivers>> GetReceivers(Guid postdataid);
        Task<PostDataReceivers> GetPostDataReceiverById(Guid receiverid, Guid postdataid);
        Task<PostDataReceivers> GetPostDataReceiver(string otp);
        Task<PostDataReceivers> GetReceiverById(Guid receiverid);
        Task Save();
    }
}