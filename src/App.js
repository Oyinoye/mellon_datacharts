import './App.css';
import ReactApexChart from "react-apexcharts";
import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Loading from './Loading';

function App() {

  // Table states
  
  const [category, setCategory] = useState([]);
  const [col, setCol] = useState([]);

  // Region states
  const [east, setEast] = useState([]);
  const [west, setWest] = useState([]);
  const [south, setSouth] = useState([]);
  const [central, setCentral] = useState([]);

  // Set state regionally per year for sales

  // Year 1
  const [east_sales_2014, seteast_sales_2014] = useState([])
  const [west_sales_2014, setwest_sales_2014] = useState([])
  const [south_sales_2014, setsouth_sales_2014] = useState([])
  const [central_sales_2014, setcentral_sales_2014] = useState([])

  // Year 2 
  const [east_sales_2015, seteast_sales_2015] = useState([])
  const [west_sales_2015, setwest_sales_2015] = useState([])
  const [south_sales_2015, setsouth_sales_2015] = useState([])
  const [central_sales_2015, setcentral_sales_2015] = useState([])

  // Year 3
  const [east_sales_2016, seteast_sales_2016] = useState([])
  const [west_sales_2016, setwest_sales_2016] = useState([])
  const [south_sales_2016, setsouth_sales_2016] = useState([])
  const [central_sales_2016, setcentral_sales_2016] = useState([])

  // Year 4 
  const [east_sales_2017, seteast_sales_2017] = useState([])
  const [west_sales_2017, setwest_sales_2017] = useState([])
  const [south_sales_2017, setsouth_sales_2017] = useState([])
  const [central_sales_2017, setcentral_sales_2017] = useState([])


  // Set state regionally per year for profits

  // Year 1
  const [east_profits_2014, seteast_profits_2014] = useState([])
  const [west_profits_2014, setwest_profits_2014] = useState([])
  const [south_profits_2014, setsouth_profits_2014] = useState([])
  const [central_profits_2014, setcentral_profits_2014] = useState([])

  // Year 2 
  const [east_profits_2015, seteast_profits_2015] = useState([])
  const [west_profits_2015, setwest_profits_2015] = useState([])
  const [south_profits_2015, setsouth_profits_2015] = useState([])
  const [central_profits_2015, setcentral_profits_2015] = useState([])

  // Year 3
  const [east_profits_2016, seteast_profits_2016] = useState([])
  const [west_profits_2016, setwest_profits_2016] = useState([])
  const [south_profits_2016, setsouth_profits_2016] = useState([])
  const [central_profits_2016, setcentral_profits_2016] = useState([])

  // Year 4 
  const [east_profits_2017, seteast_profits_2017] = useState([])
  const [west_profits_2017, setwest_profits_2017] = useState([])
  const [south_profits_2017, setsouth_profits_2017] = useState([])
  const [central_profits_2017, setcentral_profits_2017] = useState([])

  // Pie chart states 

  // Regional sales states 
  const [regional_sales_2014, setregional_sales_2014] = useState([])
  const [regional_sales_2015, setregional_sales_2015] = useState([])
  const [regional_sales_2016, setregional_sales_2016] = useState([])
  const [regional_sales_2017, setregional_sales_2017] = useState([])

  // Regional profits states 
  const [regional_profits_2014, setregional_profits_2014] = useState([])
  const [regional_profits_2015, setregional_profits_2015] = useState([])
  const [regional_profits_2016, setregional_profits_2016] = useState([])
  const [regional_profits_2017, setregional_profits_2017] = useState([])

  // Loading state 
  const [loading, setloading] = useState(true)

  // End of states

  useEffect(() => {
    fetchRandomData();
    return () => {
      fetchRandomData();
    }
  }, [])

  // Data table

  const data = category;

  let columns = Object.values(col).map((y) => ({
    name: y,
    selector: y,
    sortable: true}
  ));

  // Graphs Bar Chart

  // Graphs of regions sales revenues

  const series1= [{
                name: 'Year 1 (2014)',
                data: east_sales_2014
              }, {
                name: 'Year 2 (2015)',
                data: east_sales_2015
              }
              , {
                name: 'Year 3 (2016)',
                data: east_sales_2016
              }
            , {
                name: 'Year 4 (2017)',
                data: east_sales_2017
              }]

      const options1 = {
                chart: {
                  type: 'bar',
                  height: 350
                },
                plotOptions: {
                  bar: {
                    horizontal: false,
                    columnWidth: '85%',
                    endingShape: 'rounded'
                  },
                },
                dataLabels: {
                  enabled: false
                },
                stroke: {
                  show: true,
                  width: 2,
                  colors: ['transparent']
                },
                xaxis: {
                  categories: east,
                },
                yaxis: {
                  title: {
                    text: 'Sales Revenue ($)'
                  }
                },
                fill: {
                  opacity: 1
                },
                tooltip: {
                  y: {
                    formatter: function (val) {
                      return "$ " + Number(val.toFixed(4)) + " thousands"
                    }
                  }
                }
              }

  const series2= [{
                name: 'Year 1 (2014)',
                data: west_sales_2014
              }, {
                name: 'Year 2 (2015)',
                data: west_sales_2015
              }
              , {
                name: 'Year 3 (2016)',
                data: west_sales_2016
              }
            , {
                name: 'Year 4 (2017)',
                data: west_sales_2017
              }]

        const options2 = {
                chart: {
                  type: 'bar',
                  height: 350,
                },
                plotOptions: {
                  bar: {
                    horizontal: false,
                    columnWidth: '85%',
                    endingShape: 'rounded'
                  },
                },
                dataLabels: {
                  enabled: false
                },
                stroke: {
                  show: true,
                  width: 2,
                  colors: ['transparent']
                },
                xaxis: {
                  categories: west,
                },
                yaxis: {
                  title: {
                    text: 'Sales Revenue ($)'
                  }
                },
                fill: {
                  opacity: 1
                },
                tooltip: {
                  y: {
                    formatter: function (val) {
                      return "$ " + Number(val.toFixed(2)) + " thousands"
                    }
                  }
                }
              }

  const series3= [{
                name: 'Year 1 (2014)',
                data: south_sales_2014
              }, {
                name: 'Year 2 (2015)',
                data: south_sales_2015
              }
              , {
                name: 'Year 3 (2016)',
                data: south_sales_2016
              }
            , {
                name: 'Year 4 (2017)',
                data: south_sales_2017
              }]

        const options3 = {
                chart: {
                  type: 'bar',
                  height: 350
                },
                plotOptions: {
                  bar: {
                    horizontal: false,
                    columnWidth: '85%',
                    endingShape: 'rounded'
                  },
                },
                dataLabels: {
                  enabled: false
                },
                stroke: {
                  show: true,
                  width: 2,
                  colors: ['transparent']
                },
                xaxis: {
                  categories: south,
                },
                yaxis: {
                  title: {
                    text: 'Sales Revenue ($)'
                  }
                },
                fill: {
                  opacity: 1
                },
                tooltip: {
                  y: {
                    formatter: function (val) {
                      return "$ " + Number(val.toFixed(4)) + " thousands"
                    }
                  }
                }
              }

  const series4= [{
                name: 'Year 1 (2014)',
                data: central_sales_2014
              }, {
                name: 'Year 2 (2015)',
                data: central_sales_2015
              }
              , {
                name: 'Year 3 (2016)',
                data: central_sales_2016
              }
            , {
                name: 'Year 4 (2017)',
                data: central_sales_2017
              }]

      const options4 = {
                chart: {
                  type: 'bar',
                  height: '550px'
                },
                plotOptions: {
                  bar: {
                    horizontal: false,
                    columnWidth: '85%',
                    endingShape: 'rounded'
                  },
                },
                dataLabels: {
                  enabled: false
                },
                stroke: {
                  show: true,
                  width: 2,
                  colors: ['transparent']
                },
                xaxis: {
                  categories: central,
                },
                yaxis: {
                  title: {
                    text: 'Sales Revenue ($)'
                  }
                },
                fill: {
                  opacity: 1
                },
                tooltip: {
                  y: {
                    formatter: function (val) {
                      return "$ " + Number(val.toFixed(2)) + " thousands"
                    }
                  }
                }
              }

  // End of Graph 


    // Graphs of regions profits

    const series_a= [{
      name: 'Year 1 (2014)',
      data: east_profits_2014
    }, {
      name: 'Year 2 (2015)',
      data: east_profits_2015
    }
    , {
      name: 'Year 3 (2016)',
      data: east_profits_2016
    }
  , {
      name: 'Year 4 (2017)',
      data: east_profits_2017
    }]

  const options_a = {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '85%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: east,
      },
      yaxis: {
        title: {
          text: 'Profit ($)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + Number(val.toFixed(4)) + " thousands"
          }
        }
      }
    }

  const series_b= [{
      name: 'Year 1 (2014)',
      data: west_profits_2014
    }, {
      name: 'Year 2 (2015)',
      data: west_profits_2015
    }
    , {
      name: 'Year 3 (2016)',
      data: west_profits_2016
    }
  , {
      name: 'Year 4 (2017)',
      data: west_profits_2017
    }]

  const options_b = {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '85%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: west,
      },
      yaxis: {
        title: {
          text: 'Profit ($)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + Number(val.toFixed(2)) + " thousands"
          }
        }
      }
    }

  const series_c= [{
      name: 'Year 1 (2014)',
      data: south_profits_2014
    }, {
      name: 'Year 2 (2015)',
      data: south_profits_2015
    }
    , {
      name: 'Year 3 (2016)',
      data: south_profits_2016
    }
  , {
      name: 'Year 4 (2017)',
      data: south_profits_2017
    }]

  const options_c = {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '85%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: south,
      },
      yaxis: {
        title: {
          text: 'Profit ($)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + Number(val.toFixed(4)) + " thousands"
          }
        }
      }
    }

  const series_d= [{
      name: 'Year 1 (2014)',
      data: central_profits_2014
    }, {
      name: 'Year 2 (2015)',
      data: central_profits_2015
    }
    , {
      name: 'Year 3 (2016)',
      data: central_profits_2016
    }
  , {
      name: 'Year 4 (2017)',
      data: central_profits_2017
    }]

  const options_d = {
      chart: {
        type: 'bar',
        height: '550px'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '85%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: central,
      },
      yaxis: {
        title: {
          text: 'Profit ($)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + Number(val.toFixed(2)) + " thousands"
          }
        }
      }
    }

  // End of Graph  

  // Pie Charts

  // Sales pie

  // Year 1 
  const series_sales_pie1 = regional_sales_2014

  const  options_sales_pie1= {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['West', 'East', 'South', 'Central'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }

  // Year 2 
  const series_sales_pie2 = regional_sales_2015

  const  options_sales_pie2= {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['West', 'East', 'South', 'Central'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }

  // Year 3 
  const series_sales_pie3 = regional_sales_2016

  const  options_sales_pie3= {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['West', 'East', 'South', 'Central'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }


  // Year 4 
  const series_sales_pie4 = regional_sales_2017

  const  options_sales_pie4= {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['West', 'East', 'South', 'Central'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }


  // Profits pie

  // Year 1 
  const series_profits_pie1 = regional_profits_2014

  const  options_profits_pie1= {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['West', 'East', 'South', 'Central'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }

  // Year 2 
  const series_profits_pie2 = regional_profits_2015

  const  options_profits_pie2= {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['West', 'East', 'South', 'Central'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }

  // Year 3 
  const series_profits_pie3 = regional_profits_2016

  const  options_profits_pie3= {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['West', 'East', 'South', 'Central'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }


  // Year 4 
  const series_profits_pie4 = regional_profits_2017

  const  options_profits_pie4= {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['West', 'East', 'South', 'Central'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }



    
  const  fetchRandomData = async () =>  {
      var myData =  await axios.post('https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub',
        {
          "angular_test": "angular-developer"   
        }
      )
    
    const table_data = myData.data
    setCategory(table_data)

    let keysArr = {...Object.keys(myData.data[0])}
    setCol(keysArr)

    function get_regional_states (data, region) {
      return data.filter(x => x["Region"] === region).map(x => x["State"]).filter((value, index, self) => self.indexOf(value) === index);
    }

    function get_regional_states_data (data, region) {
      return data.filter(x => x["Region"] === region);
    }

    function get_regions (data) {
      return data.map(x => x["Region"]).filter((value, index, self) => self.indexOf(value) === index);
    }

    function get_regional_states_data_by_year (data, region, year) {
      return data.filter(x => x["Region"] === region && x["Order Date"].split("/")[2] === year);
    }


    // Set regional data for all states

    const eastern_region = get_regional_states(myData.data, "East")
    setEast(eastern_region);

    const western_region = get_regional_states(myData.data, "West")
    setWest(western_region);

    const southern_region = get_regional_states(myData.data, "South")
    setSouth(southern_region);

    const central_region = get_regional_states(myData.data, "Central")
    setCentral(central_region);

    // Regional data by year
    // const eastern_region_data = get_regional_states_data(myData.data, "East")
    // const Western_region_data = get_regional_states_data(myData.data, "West")

    // East
    const eastern_region_data_2014 = get_regional_states_data_by_year(myData.data, "East", '2014')
    const eastern_region_data_2015 = get_regional_states_data_by_year(myData.data, "East", '2015')
    const eastern_region_data_2016 = get_regional_states_data_by_year(myData.data, "East", '2016')
    const eastern_region_data_2017 = get_regional_states_data_by_year(myData.data, "East", '2017')

    // West 
    const western_region_data_2014 = get_regional_states_data_by_year(myData.data, "West", '2014')
    const western_region_data_2015 = get_regional_states_data_by_year(myData.data, "West", '2015')
    const western_region_data_2016 = get_regional_states_data_by_year(myData.data, "West", '2016')
    const western_region_data_2017 = get_regional_states_data_by_year(myData.data, "West", '2017')

    // South 
    const southern_region_data_2014 = get_regional_states_data_by_year(myData.data, "South", '2014')
    const southern_region_data_2015 = get_regional_states_data_by_year(myData.data, "South", '2015')
    const southern_region_data_2016 = get_regional_states_data_by_year(myData.data, "South", '2016')
    const southern_region_data_2017 = get_regional_states_data_by_year(myData.data, "South", '2017')
    
    // Central 
    const central_region_data_2014 = get_regional_states_data_by_year(myData.data, "Central", '2014')
    const central_region_data_2015 = get_regional_states_data_by_year(myData.data, "Central", '2015')
    const central_region_data_2016 = get_regional_states_data_by_year(myData.data, "Central", '2016')
    const central_region_data_2017 = get_regional_states_data_by_year(myData.data, "Central", '2017')

    
    // Regional sales data

    // Eastern region sales data 
    const eastern_region_sales_2014 = get_cities_summed_arr(eastern_region_data_2014, eastern_region, "Sales")
    const eastern_region_sales_2015 = get_cities_summed_arr(eastern_region_data_2015, eastern_region, "Sales")
    const eastern_region_sales_2016 = get_cities_summed_arr(eastern_region_data_2016, eastern_region, "Sales")
    const eastern_region_sales_2017 = get_cities_summed_arr(eastern_region_data_2017, eastern_region, "Sales")

    // western region sales data 
    const western_region_sales_2014 = get_cities_summed_arr(western_region_data_2014, western_region, "Sales")
    const western_region_sales_2015 = get_cities_summed_arr(western_region_data_2015, western_region, "Sales")
    const western_region_sales_2016 = get_cities_summed_arr(western_region_data_2016, western_region, "Sales")
    const western_region_sales_2017 = get_cities_summed_arr(western_region_data_2017, western_region, "Sales")

    // southern region sales data 
    const southern_region_sales_2014 = get_cities_summed_arr(southern_region_data_2014, southern_region, "Sales")
    const southern_region_sales_2015 = get_cities_summed_arr(southern_region_data_2015, southern_region, "Sales")
    const southern_region_sales_2016 = get_cities_summed_arr(southern_region_data_2016, southern_region, "Sales")
    const southern_region_sales_2017 = get_cities_summed_arr(southern_region_data_2017, southern_region, "Sales")

    // central region sales data 
    const central_region_sales_2014 = get_cities_summed_arr(central_region_data_2014, central_region, "Sales")
    const central_region_sales_2015 = get_cities_summed_arr(central_region_data_2015, central_region, "Sales")
    const central_region_sales_2016 = get_cities_summed_arr(central_region_data_2016, central_region, "Sales")
    const central_region_sales_2017 = get_cities_summed_arr(central_region_data_2017, central_region, "Sales")


    // Regional sales data

    // Eastern region sales data 
    const eastern_region_profits_2014 = get_cities_summed_arr(eastern_region_data_2014, eastern_region, "Profit")
    const eastern_region_profits_2015 = get_cities_summed_arr(eastern_region_data_2015, eastern_region, "Profit")
    const eastern_region_profits_2016 = get_cities_summed_arr(eastern_region_data_2016, eastern_region, "Profit")
    const eastern_region_profits_2017 = get_cities_summed_arr(eastern_region_data_2017, eastern_region, "Profit")

    // western region sales data 
    const western_region_profits_2014 = get_cities_summed_arr(western_region_data_2014, western_region, "Profit")
    const western_region_profits_2015 = get_cities_summed_arr(western_region_data_2015, western_region, "Profit")
    const western_region_profits_2016 = get_cities_summed_arr(western_region_data_2016, western_region, "Profit")
    const western_region_profits_2017 = get_cities_summed_arr(western_region_data_2017, western_region, "Profit")

    // southern region sales data 
    const southern_region_profits_2014 = get_cities_summed_arr(southern_region_data_2014, southern_region, "Profit")
    const southern_region_profits_2015 = get_cities_summed_arr(southern_region_data_2015, southern_region, "Profit")
    const southern_region_profits_2016 = get_cities_summed_arr(southern_region_data_2016, southern_region, "Profit")
    const southern_region_profits_2017 = get_cities_summed_arr(southern_region_data_2017, southern_region, "Profit")

    // central region sales data 
    const central_region_profits_2014 = get_cities_summed_arr(central_region_data_2014, central_region, "Profit")
    const central_region_profits_2015 = get_cities_summed_arr(central_region_data_2015, central_region, "Profit")
    const central_region_profits_2016 = get_cities_summed_arr(central_region_data_2016, central_region, "Profit")
    const central_region_profits_2017 = get_cities_summed_arr(central_region_data_2017, central_region, "Profit")


    // Set states of regional data by year for sales
    // East 
    seteast_sales_2014(eastern_region_sales_2014)
    seteast_sales_2015(eastern_region_sales_2015)
    seteast_sales_2016(eastern_region_sales_2016)
    seteast_sales_2017(eastern_region_sales_2017)

    // West
    setwest_sales_2014(western_region_sales_2014)
    setwest_sales_2015(western_region_sales_2015)
    setwest_sales_2016(western_region_sales_2016)
    setwest_sales_2017(western_region_sales_2017)

    // South 
    setsouth_sales_2014(southern_region_sales_2014)
    setsouth_sales_2015(southern_region_sales_2015)
    setsouth_sales_2016(southern_region_sales_2016)
    setsouth_sales_2017(southern_region_sales_2017)

    // Central 
    setcentral_sales_2014(central_region_sales_2014)
    setcentral_sales_2015(central_region_sales_2015)
    setcentral_sales_2016(central_region_sales_2016)
    setcentral_sales_2017(central_region_sales_2017)


    // Set states of regional data by year for profits
    // East 
    seteast_profits_2014(eastern_region_profits_2014)
    seteast_profits_2015(eastern_region_profits_2015)
    seteast_profits_2016(eastern_region_profits_2016)
    seteast_profits_2017(eastern_region_profits_2017)

    // West
    setwest_profits_2014(western_region_profits_2014)
    setwest_profits_2015(western_region_profits_2015)
    setwest_profits_2016(western_region_profits_2016)
    setwest_profits_2017(western_region_profits_2017)

    // South 
    setsouth_profits_2014(southern_region_profits_2014)
    setsouth_profits_2015(southern_region_profits_2015)
    setsouth_profits_2016(southern_region_profits_2016)
    setsouth_profits_2017(southern_region_profits_2017)

    // Central 
    setcentral_profits_2014(central_region_profits_2014)
    setcentral_profits_2015(central_region_profits_2015)
    setcentral_profits_2016(central_region_profits_2016)
    setcentral_profits_2017(central_region_profits_2017)

    // Variables for pie chart 

    // Sales for region per year
    const region_sales_2014 = get_array_of_regional_sums(myData.data, "Sales", "2014")
    const region_sales_2015 = get_array_of_regional_sums(myData.data, "Sales", "2015")
    const region_sales_2016 = get_array_of_regional_sums(myData.data, "Sales", "2016")
    const region_sales_2017 = get_array_of_regional_sums(myData.data, "Sales", "2017")

    // Profits for region per year
    const region_profits_2014 = get_array_of_regional_sums(myData.data, "Profit", "2014")
    const region_profits_2015 = get_array_of_regional_sums(myData.data, "Profit", "2015")
    const region_profits_2016 = get_array_of_regional_sums(myData.data, "Profit", "2016")
    const region_profits_2017 = get_array_of_regional_sums(myData.data, "Profit", "2017") 

    // Set states for pie chart 
    setregional_sales_2014(region_sales_2014)
    setregional_sales_2015(region_sales_2015)
    setregional_sales_2016(region_sales_2016)
    setregional_sales_2017(region_sales_2017)

    setregional_profits_2014(region_profits_2014)
    setregional_profits_2015(region_profits_2015)
    setregional_profits_2016(region_profits_2016)
    setregional_profits_2017(region_profits_2017)
    
    

    // States for pie chart 

    console.log(region_sales_2014)
    console.log(region_sales_2017)


    function get_cities_summed_arr(regional_cities_yearly_data, region_cities_arr, summed_item) {
      // Function to return array of specified summed item for all states in a region
    
      const getSingleStateData = (state) => {
        // function to return array of summed item for a single state
        let stateArr = []
        for(let i = 0; i < regional_cities_yearly_data.length; i++) {
            if (regional_cities_yearly_data[i]["State"] === state) {
              stateArr.push(regional_cities_yearly_data[i][summed_item])
            }
        }
        
        return stateArr
      }

      let states_arr =  []
      // Puts an array for each of all the regional states into states_arr
      for (let i = 0; i < region_cities_arr.length; i++) {
        states_arr.push(getSingleStateData(region_cities_arr[i]))
      }
      
      let arr = []
      // Reducing the array to an the summed up value for each state in the region
      for(let i = 0; i < states_arr.length; i++) {
        let sum = 0;
        for(let j = 0; j < states_arr[i].length; j++) {
          sum = sum + Number(states_arr[i][j])
        }
          console.log(sum)
          arr.push(sum)
      }
          console.log(arr)
      return arr
    }

    function get_array_of_regional_sums(data, summable, year) {
      let summed_array = []
      const regions = get_regions(data)
      console.log(regions)
      for (let i = 0; i < regions.length; i++) {
        let arr = []
        const regional_data = get_regional_states_data (data, regions[i])
        for(let j=0; j < regional_data.length; j++) {
          if (regional_data[j]["Order Date"].split("/")[2] === year) {
            arr.push(regional_data[j][summable])
          }
        }

        summed_array.push(Number(arr.reduce(((a, c) => Number(a) + Number(c)), 0).toFixed(2)))
      }
      return summed_array
    }

    setloading(false)
    
  }


    return ( 
      <div className="app">

        <div className="sidebar">
          <ul>
            <a href='#table'> 
            <li>
            Table
            </li>
            </a>
              <a href='#east'> 
            <li>
            Eastern America
            </li>
            </a>
            <a href='#west'>
            <li>
              Western America 
            </li>
            </a>
            <a href='#south'>
            <li>
            Southern America
            </li>
            </a>
            <a href='#central'>
            <li>
            Central America
            </li>
            </a>
            <a href='#regional'>
            <li>
             Regional
            </li>
            </a>
          </ul>
        </div>
         
        <div className="my-charts">
        {loading ? (<Loading />) :
          (<> 
          <div id="table">
            <DataTable
              title="Data Table"
              columns={columns}
              data={data}
              pagination
              subHeader
              responsive
              striped
              highlightOnHover
            />
          </div>

          <div id="east">
            <h2>Sales and Profit Charts for West USA over four years</h2>
            <div>
            <ReactApexChart
                      options={options1}
                      series={series1}
                      type="bar"
                      width="600"
                      height="500"
                    />
               <ReactApexChart
                      options={options_a}
                      series={series_a}
                      type="bar"
                      width="600"
                      height="500"
                    />
            </div>
          </div>

          <div id="west">
              <h2>Sales and Profit Charts for West USA over four years</h2>
              <div>
                <ReactApexChart
                        options={options2}
                        series={series2}
                        type="bar"
                        width="600"
                        height="500"
                      />
                <ReactApexChart
                        options={options_b}
                        series={series_b}
                        type="bar"
                        width="600"
                        height="500"
                      />
              </div>
          </div>

          <div id="south">
              <h2>Sales and Profit Charts for Southern USA over four years</h2>
              <div>
                <ReactApexChart
                        options={options3}
                        series={series3}
                        type="bar"
                        width="600"
                        height="500"
                      />
                <ReactApexChart
                        options={options_c}
                        series={series_c}
                        type="bar"
                        width="600"
                        height="500"
                      />
              </div>
          </div>

          <div id="central">
              <h2>Sales and Profit Charts for Central USA over four years</h2>
              <div>
                <ReactApexChart
                        options={options4}
                        series={series4}
                        type="bar"
                        width="600"
                        height="500"
                      />
                <ReactApexChart
                        options={options_d}
                        series={series_d}
                        type="bar"
                        width="600"
                        height="500"
                      />                        
              </div>
          </div>

          <div id="regional">
              <h2>Sales(Top) and Profit(Bottom) for each region (Years 1-4)</h2>
              <div>
                <ReactApexChart
                        options={options_sales_pie1}
                        series={series_sales_pie1}
                        type="pie"
                        width="400"
                      />
                <ReactApexChart
                        options={options_sales_pie2}
                        series={series_sales_pie2}
                        type="pie"
                        width="400"
                      />
                <ReactApexChart
                        options={options_sales_pie3}
                        series={series_sales_pie3}
                        type="pie"
                        width="400"
                      />
                <ReactApexChart
                        options={options_sales_pie4}
                        series={series_sales_pie4}
                        type="pie"
                        width="400"
                      />
              </div>
              <div>
                <ReactApexChart
                        options={options_profits_pie1}
                        series={series_profits_pie1}
                        type="pie"
                        width="400"
                      />
                <ReactApexChart
                        options={options_profits_pie2}
                        series={series_profits_pie2}
                        type="pie"
                        width="400"
                      />
                <ReactApexChart
                        options={options_profits_pie3}
                        series={series_profits_pie3}
                        type="pie"
                        width="400"
                      />
                <ReactApexChart
                        options={options_profits_pie4}
                        series={series_profits_pie4}
                        type="pie"
                        width="400"
                      />
              </div>
          </div>
          </>)}
        </div>
      </div>
    );
}

export default App;
