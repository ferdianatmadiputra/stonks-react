import React  from 'react'
import millify from 'millify'

export default function KeyMetrics (props) {
  let metrics = props.metrics
  return (
    <div className="jumbotron p-3 mb-5">
      <span>Most Recent Quarter</span>
      <p><b>Key Metrics</b></p>
      <hr/>
      {
        metrics.map((metric) => (
          <div className="text-start">
            <p>Market Cap: 
              {
                metric.marketCapTTM ?
                <span> {millify(metric.marketCapTTM, { space: true})} USD<br /></span>
                : <span>no data</span>
              }
              
              Enterprise Value: 
              {
                metric.enterpriseValueTTM ?
                <span> {millify(metric.enterpriseValueTTM, { space: true})} USD</span>
                : <span>no data</span>
              }
            </p>
            <div className="row">
              <div className="col-12 col-xl-6 col-lg-6 mb-3 border-start border-success rounded-lg">
                <div className="row">
                  <div><b>Earnings</b></div>
                  <div className="col-auto">
                    <div>Earnings Per Share (EPS)</div>
                    <div>Revenue Per Share (RPS)</div>
                    <div>Book Value Per Share (BVPS)</div>
                    <div>Cash Per Share (CEPS)</div>
                    <div>Net Asset Per Share (NAVS)</div>
                  </div>
                  <div className="col">
                    {
                      metric.netIncomePerShareTTM ?
                      <div>: {metric.netIncomePerShareTTM.toFixed(2)}</div>
                      : <div>: no data </div>
                    }
                    {
                      metric.revenuePerShareTTM ?
                      <div>: {metric.revenuePerShareTTM.toFixed(2)}</div>
                      : <div>: no data </div>
                    }
                    {
                      metric.bookValuePerShareTTM ?
                      <div>: {metric.bookValuePerShareTTM.toFixed(2)}</div>
                      : <div>: no data </div>
                    }
                    {
                      metric.cashPerShareTTM ?
                      <div>: {metric.cashPerShareTTM.toFixed(2)}</div>
                      : <div>: no data </div>
                    }
                    {
                      metric.netCurrentAssetValueTTM ?
                      <div>: {metric.netCurrentAssetValueTTM.toFixed(2)}</div>
                      : <div>: no data </div>
                    }
                    
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-6 col-lg-6  mb-3 border-start border-info rounded-lg">
                <div className="row">
                  <div><b>Valuation</b></div>
                  <div className="col-auto">
                    <div>Dividend Yield</div>
                    <div>Price Earnings Ratio (PER)</div>
                    <div>Price Sales Ratio (PSR)</div>
                    <div>Price Book Value Ratio (PBV)</div>
                    <div>Price Cash Flow Ratio (PCFR)</div>
                  </div>
                  <div className="col">
                    {
                      metric.dividendYieldPercentageTTM ?
                      <div>: {metric.dividendYieldPercentageTTM.toFixed(2)}%</div>
                      : <div>: no data </div>
                    }
                    {
                      metric.peRatioTTM ?
                      <div>: {metric.peRatioTTM.toFixed(2)}x</div>
                      : <div>: no data </div>
                    }
                    {
                      metric.priceToSalesRatioTTM ?
                      <div>: {metric.priceToSalesRatioTTM.toFixed(2)}x</div>
                      : <div>: no data </div>
                    }
                    {
                      metric.pbRatioTTM ?
                      <div>: {metric.pbRatioTTM.toFixed(2)}x</div>
                      : <div>: no data </div>
                    }
                    {
                      metric.pocfratioTTM ?
                      <div>: {metric.pocfratioTTM.toFixed(2)}x</div>
                      : <div>: no data </div>
                    }
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-6 col-lg-6 mb-3 border-start border-warning rounded-lg">
                <div className="row">
                  <div><b>Profitability</b></div>
                  <div className="col-auto">
                    <div>Dividend Payout Ratio</div>
                    <div>Return On Equity (ROE)</div>
                    <div>Return On Assets (ROA)</div>
                  </div>
                  <div className="col">
                    {
                      metric.payoutRatioTTM ?
                      <div>: {(metric.payoutRatioTTM * 100).toFixed(2)}%</div>
                      : <div>: no data </div>
                    }
                    {
                      metric.roeTTM ?
                      <div>: {(metric.roeTTM * 100).toFixed(2)}%</div>
                      : <div>: no data </div>
                    }
                    {
                      metric.returnOnTangibleAssetsTTM ?
                      <div>: {(metric.returnOnTangibleAssetsTTM * 100).toFixed(2)}%</div>
                      : <div>: no data </div>
                    }
                    
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-6 col-lg-6 mb-3 border-start border-danger rounded-lg">
                <div className="row">
                  <div><b>Liquidity</b></div>
                  <div className="col-auto">
                    <div>Debt Equity Ratio (DER)</div>
                    <div>Interest Coverage Ratio</div>
                    <div>Net Debt-to-EBITDA Ratio</div>
                    <div>Current Ratio (CRR)</div>
                  </div>
                  <div className="col">
                    {
                      metric.debtToEquityTTM ?
                      <div>: {(metric.debtToEquityTTM * 100).toFixed(2)}%</div>
                      : <div>: no data </div>
                    }
                    {
                      metric.interestCoverageTTM ?
                      <div>: {(metric.interestCoverageTTM).toFixed(2)}</div>
                      : <div>: no data </div>
                    }
                    {
                      metric.netDebtToEBITDATTM ?
                      <div>: {(metric.netDebtToEBITDATTM * 100).toFixed(2)}%</div>
                      : <div>: no data </div>
                    }
                    {
                      metric.currentRatioTTM ?
                      <div>: {(metric.currentRatioTTM * 100).toFixed(2)}%</div>
                      : <div>: no data </div>
                    }
                    
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))
      }
    </div>
 ) 
}