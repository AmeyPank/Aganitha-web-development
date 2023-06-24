import React from 'react';
import "./Content.css";

import Whitehouse from "../whitehouse-bread1.png";
const Content = () => {
    return (
        <main>

            <div>

                <p id='dateTime'>AUGUST 19, 2022</p>
                <h1 id='topper-title-news'>FACT SHEET: How the Inflation Reduction Act Helps Asian American,
                    Native Hawaiian, and Pacific Islander Communities</h1>
                <div className="breadcrumb">
                    <p><img src={Whitehouse} alt='whitehouse' /></p>
                    <p className="arrow-right"></p>
                    <p>BRIEFING ROOM</p>
                    <p className="arrow-right"></p>
                    <p>STATEMENTS AND RELEASES</p>
                </div>

            </div>
            <div className='text-container'>
                <div className="introduction">
                    <p>
                        By signing the Inflation Reduction Act, President Biden is delivering on his promise to build an economy
                        that works for working families, including Asian American, Native Hawaiian, and Pacific Islander (AA and
                        NHPI) families. The Inflation Reduction Act lowers prescription drug costs, health care costs, and
                        energy costs. It’s the most aggressive action we have taken to confront the climate crisis. It’ll lower
                        the deficit and ask the super wealthy and corporations to pay their fair share. And no one making under
                        $400,000 per year will pay a penny more in taxes.
                    </p>
                    <p>
                        President Biden and Congressional Democrats beat back the special interests to pass this historic
                        legislation that lowers costs for Americans and their families, advances environmental justice while
                        building a cleaner future, and grows the economy from the bottom up and the middle out.
                    </p>
                </div>

                <div className="first-section">
                    <h2>LOWER HEALTH CARE COSTS</h2>
                    <p>
                        The Inflation Reduction Act (IRA) will lower health care costs, including prescription drug costs, and
                        expand health insurance coverage for AA and NHPI families.
                    </p>

                    <p>
                        <strong>Lower Prescription Drug Costs for Seniors:</strong> Americans pay 2-3 times more for their prescription drugs
                        than people in other wealthy countries. Nearly 1 in 4 Americans struggle to afford prescription drugs,
                        and high prices contribute to racial and ethnic health inequities. The Inflation Reduction Act will help
                        close the gap in access to medication by improving prescription drug coverage and lowering drug prices
                        in Medicare. The law:
                    </p>

                    <ul>
                        <li>
                            Caps the amount that seniors will have to pay for prescription drugs they buy at the pharmacy at
                            $2,000 a year, giving peace of mind to seniors who no longer have to worry about spending thousands
                            and thousands more on prescription drugs.
                        </li>

                        <li>
                            Caps the amount that seniors will have to pay for insulin at $35 for a month’s supply.
                        </li>

                        <li>
                            Provides access to a number of additional free vaccines, including the shingles vaccine, for
                            Medicare beneficiaries.
                        </li>
                    </ul>
                </div>

                <div className="second-section">
                    <h2>MAKE THE TAX CODE FAIRER</h2>

                    <p>
                        President Trump and Congressional Republicans’ 2017 tax law only made an unfair tax system worse. The
                        Inflation Reduction Act of 2022 is a critical step forward in making our tax code fairer. It will raise
                        revenue by:
                    </p>

                    <ul>
                        <li>
                            Ensuring that high-income people and large corporations pay the taxes they already owe.
                        </li>

                        <li>
                            Cracking down on large, profitable corporations that currently get away with paying no federal
                            income tax.
                        </li>

                        <li>
                            Imposing a 1% surcharge on corporate stock buybacks that will encourage businesses to invest
                        </li>
                    </ul>

                    <p>
                        The legislation’s tax reforms won’t just raise revenue to finance critically needed investments to lower
                        costs and combat climate change, they are also an important component of building an economy that
                        rewards work rather than wealth and doesn’t let the rich and powerful get away with playing by a
                        separate set of rules.
                    </p>

                    <p>
                        Millions of working families will have better access to the benefits they are entitled to under the tax
                        code and be able to get their questions answered quickly and efficiently, thanks to the Act’s
                        transformational investments in the Internal Revenue Service. And, no family making less than $400,000
                        per year will see their taxes go up by a single cent.
                    </p>

                    <p>
                        ###
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Content