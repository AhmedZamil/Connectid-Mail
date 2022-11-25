using ShareSimple.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ShareSimple.Interface
{
    public interface IShareFileReceiverRepository
    {
       
        void InsertShareFileReceiver(ShareFileReceivers shareFileReceiver);
        void DeleteShareFileReceiver(Guid shareFileReceiversId);
        void UpdateShareDataReceiver(ShareFileReceivers shareFileReceiver);
        Task<IEnumerable<ShareFileReceivers>> GetReceivers(Guid sharedataid);
        Task<ShareFileReceivers> GetReceiverById(Guid receiverid);
        Task<ShareFileReceivers> GetShareDataReceiver(string otp);
        Task<IEnumerable<ShareFileReceivers>> GetShareDataReceiverByShareId(Guid shareDataId);
        Task Save();
    }
}