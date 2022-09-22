namespace AgeTest;
using AgeCalculator;

[TestClass]
public class UnitTest1
{
    /// <summary>
    /// Simple unit test for the age calculator
    /// </summary>
    [TestMethod]
    public void TestAge()
    {
        int year = 2001;
        int expected = 21;

        int result = Convert.CalcAge(year);
        Assert.AreEqual(expected, result);
    }
}
