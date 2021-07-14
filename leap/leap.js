//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
        // If a year is multiple of 400,
        // then it is a leap year
        if (year % 400 == 0)
            return true;
 
        // Else If a year is multiple of 100,
        // then it is not a leap year
        if (year % 100 == 0)
            return false;
 
        // Else If a year is multiple of 4,
        // then it is a leap year
        if (year % 4 == 0)
            return true;
        return false;
};
