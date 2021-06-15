package org.spmin.customerrewards;


import org.junit.jupiter.api.Test;
import org.spmin.customerrewards.services.PointsService;

import static org.junit.Assert.assertEquals;

public class PointsServiceTest {


    // Case 1: transaction amount exactly $50, expected value 0
    @Test
    public void pointsCalcFifty() {
        assertEquals(0, PointsService.calculateTransactionPoints(50.0));
    }

    // case 2: transaction amount between $50 and $100, expected value amt - 50
    @Test
    public void pointsCalcBelowHundred() {
        assertEquals(25, PointsService.calculateTransactionPoints(75.0));
        assertEquals(45, PointsService.calculateTransactionPoints(95.0));
    }

    // case 3: transaction amount exactly $100, expected value 50
    @Test
    public void pointsCalcExactlyHundred() {
        assertEquals(50, PointsService.calculateTransactionPoints(100.0));
    }

    // case 4: transaction amount over 100, expected value 50 + 2(amt - 100)
    @Test
    public void pointsCalcOverHundred() {
        assertEquals(100, PointsService.calculateTransactionPoints(125.0));
        assertEquals(150, PointsService.calculateTransactionPoints(150.0));
    }
}
