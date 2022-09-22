namespace AgeCalculator
{
    public static class Convert
    {
        /// <summary>
        /// Calculate the age of a person using the year when 
        /// they were born
        /// </summary>
        /// <param name="yearBorn">year born</param>
        /// <returns>age in years</returns>
        public static int CalcAge(int yearBorn)
        {
            return 2022 - yearBorn;
        }

        static void Main()
        {
            Console.WriteLine("Age Convert");
        }
    }
}
