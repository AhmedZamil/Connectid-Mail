using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace ShareSimple.Common
{
    public static class Utils
    {
        public static string EncodeToBase64(string plainText)
        {
            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(plainText);
            return System.Convert.ToBase64String(plainTextBytes);
        }

        public static string DecodeToBase64(string base64EncodedData)
        {
            var base64EncodedBytes = System.Convert.FromBase64String(base64EncodedData);
            return System.Text.Encoding.UTF8.GetString(base64EncodedBytes);
        }
        public static bool IsMonthLastDay(this DateTime date)
        {
            var totalDays = DateTime.DaysInMonth(date.Year, date.Month);
            return totalDays == date.Day;
        }
        public static int? ToNumber(this string n, int? defaultValue = null)
        {
            int num;
            if (int.TryParse(n, out num))
                return num;
            else
                return defaultValue;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="dateStr">date string in YYYYY-MM-DD format</param>
        /// <returns></returns>
        public static DateTime ToDate(this string dateStr)
        {
            var dateParts = dateStr.Split('-', '/');
            return new DateTime(dateParts[0].ToNumber().Value, dateParts[1].ToNumber().Value, dateParts[2].ToNumber().Value);
        }
        public static DateTime? InYear(this DateTime? date, int year)
        {
            if (date == null) return null;
            var dateYear = -date.Value.Year + year;
            return date.Value.AddYears(dateYear);
        }
        public static DateTime InYear(this DateTime date, int year)
        {
            var dateYear = -date.Year + year;
            return date.AddYears(dateYear);
        }

        public static string ReadLanguageFile(string webRoot, string language)
        {
            var langFile = System.IO.Path.Combine(webRoot, $"assets/i18n/{language}.json");
            if (!System.IO.File.Exists(langFile))
            {
                langFile = System.IO.Path.Combine(webRoot, $"assets/i18n/en-US.json");
                if (!System.IO.File.Exists(langFile))
                {
                    throw new Exception($"Language file {language}.json or en-US.json isn't found");
                }
            }
            var filecontent = System.IO.File.ReadAllText(langFile);

            return filecontent;
        }

        public static string GetLanguageTranslation(string webRoot, string language, string key)
        {
            var fileContent = ReadLanguageFile(webRoot, language);
            var languageCollection = JsonConvert.DeserializeObject<Dictionary<string, string>>(fileContent);
            string translation = languageCollection.GetValueOrDefault(key);
            return translation == null ? key : translation;
        }

        public static string GenerateOtp()
        {
            return Guid.NewGuid().GetHashCode().ToString("x");
        }
    }
}
