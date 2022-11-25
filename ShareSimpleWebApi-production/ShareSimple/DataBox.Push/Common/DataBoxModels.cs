using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBox.Push.Common
{
    public class Metric
    {
        public string Title { get; set; }
        public string Key { get; set; }
        public int DataType { get; set; }
        public bool IsAttributed { get; set; }
    }

    public class MetricResponse
    {
        public List<Metric> Metrics { get; set; }
    }

    public class RequestBody
    {
        public List<object> Data { get; set; }
    }

    public class PushRequest
    {
        public DateTime Date { get; set; }
        public RequestBody Body { get; set; }
        public List<object> Errors { get; set; }
    }

    public class PushResponseBody
    {
        public string Id { get; set; }
    }

    public class PushResponse
    {
        public DateTime Date { get; set; }
        public PushResponseBody Body { get; set; }
    }

    public class PushModel
    {
        public PushRequest Request { get; set; }
        public PushResponse Response { get; set; }
        public List<string> Metrics { get; set; }
    }
}
