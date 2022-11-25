using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShareSimple.Common.eConomic
{
    public class Units
    {
        public static Unit Stk
        {
            get
            {
                return new Unit() { UnitNumber = 1, Name = "stk." };
            }
        }
        public static Unit Timer
        {
            get
            {
                return new Unit() { UnitNumber = 2, Name = "timer" };
            }
        }
        public static Unit Pcs
        {
            get
            {
                return new Unit() { UnitNumber = 3, Name = "pcs." };
            }
        }
    }
}
