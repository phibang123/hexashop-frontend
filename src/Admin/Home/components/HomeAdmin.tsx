import React from 'react'

export default function Home() {
  return (
    <section>
    <div id="main" className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">

        <div className="bg-gray-800 pt-3">
            <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                <h1 className="font-bold pl-2">Analytics</h1>
            </div>
        </div>

        <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
         
                <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                    <div className="flex flex-row items-center">
                        <div className="flex-shrink pr-4">
                            <div className="rounded-full p-5 bg-green-600"><i className="fa fa-wallet fa-2x fa-inverse"></i></div>
                        </div>
                        <div className="flex-1 text-right md:text-center">
                            <h2 className="font-bold uppercase text-gray-600">Total Revenuee</h2>
                           <p className="font-bold text-3xl">$3249 <span className="text-green-500"><i className="fas fa-caret-up"></i></span></p>
                        </div>
                    </div>
                </div>
          
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            
                <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
                    <div className="flex flex-row items-center">
                        <div className="flex-shrink pr-4">
                            <div className="rounded-full p-5 bg-pink-600"><i className="fas fa-users fa-2x fa-inverse"></i></div>
                        </div>
                        <div className="flex-1 text-right md:text-center">
                            <h2 className="font-bold uppercase text-gray-600">Total Users</h2>
                            <p className="font-bold text-3xl">249 <span className="text-pink-500"><i className="fas fa-exchange-alt"></i></span></p>
                        </div>
                    </div>
                </div>
         
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            
                <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                    <div className="flex flex-row items-center">
                        <div className="flex-shrink pr-4">
                            <div className="rounded-full p-5 bg-yellow-600"><i className="fas fa-user-plus fa-2x fa-inverse"></i></div>
                        </div>
                        <div className="flex-1 text-right md:text-center">
                            <h2 className="font-bold uppercase text-gray-600">New Users</h2>
                            <p className="font-bold text-3xl">2 <span className="text-yellow-600"><i className="fas fa-caret-up"></i></span></p>
                        </div>
                    </div>
                </div>
        
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
                    <div className="flex flex-row items-center">
                        <div className="flex-shrink pr-4">
                            <div className="rounded-full p-5 bg-blue-600"><i className="fas fa-server fa-2x fa-inverse"></i></div>
                        </div>
                        <div className="flex-1 text-right md:text-center">
                            <h2 className="font-bold uppercase text-gray-600">Server Uptime</h2>
                            <p className="font-bold text-3xl">152 days</p>
                        </div>
                    </div>
                </div>
            
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          
                <div className="bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5">
                    <div className="flex flex-row items-center">
                        <div className="flex-shrink pr-4">
                            <div className="rounded-full p-5 bg-indigo-600"><i className="fas fa-tasks fa-2x fa-inverse"></i></div>
                        </div>
                        <div className="flex-1 text-right md:text-center">
                            <h2 className="font-bold uppercase text-gray-600">To Do List</h2>
                            <p className="font-bold text-3xl">7 tasks</p>
                        </div>
                    </div>
                </div>
           
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
     
                <div className="bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-red-500 rounded-lg shadow-xl p-5">
                    <div className="flex flex-row items-center">
                        <div className="flex-shrink pr-4">
                            <div className="rounded-full p-5 bg-red-600"><i className="fas fa-inbox fa-2x fa-inverse"></i></div>
                        </div>
                        <div className="flex-1 text-right md:text-center">
                            <h2 className="font-bold uppercase text-gray-600">Issues</h2>
                            <p className="font-bold text-3xl">3 <span className="text-red-500"><i className="fas fa-caret-up"></i></span></p>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>


        <div className="flex flex-row flex-wrap flex-grow mt-2">

        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
      
            <div className="bg-white border-transparent rounded-lg shadow-xl">
                <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                    <div className="font-bold uppercase text-gray-600">Graph</div>
                </div>
                <div className="p-5">
                    <canvas id="chartjs-7" className="chartjs" width="undefined" height="undefined"></canvas>
                    {/* <script>
                        new Chart(document.getElementById("chartjs-7"), {
                            "type": "bar",
                            "data": {
                                "labels": ["January", "February", "March", "April"],
                                "datasets": [{
                                    "label": "Page Impressions",
                                    "data": [10, 20, 30, 40],
                                    "borderColor": "rgb(255, 99, 132)",
                                    "backgroundColor": "rgba(255, 99, 132, 0.2)"
                                }, {
                                    "label": "Adsense Clicks",
                                    "data": [5, 15, 10, 30],
                                    "type": "line",
                                    "fill": false,
                                    "borderColor": "rgb(54, 162, 235)"
                                }]
                            },
                            "options": {
                                "scales": {
                                    "yAxes": [{
                                        "ticks": {
                                            "beginAtZero": true
                                        }
                                    }]
                                }
                            }
                        });
                    </script> */}
                </div>
            </div>
      
        </div>

        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
       
            <div className="bg-white border-transparent rounded-lg shadow-xl">
                <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                    <h2 className="font-bold uppercase text-gray-600">Graph</h2>
                </div>
                <div className="p-5">
                    <canvas id="chartjs-0" className="chartjs" width="undefined" height="undefined"></canvas>
                    {/* <script>
                        new Chart(document.getElementById("chartjs-0"), {
                            "type": "line",
                            "data": {
                                "labels": ["January", "February", "March", "April", "May", "June", "July"],
                                "datasets": [{
                                    "label": "Views",
                                    "data": [65, 59, 80, 81, 56, 55, 40],
                                    "fill": false,
                                    "borderColor": "rgb(75, 192, 192)",
                                    "lineTension": 0.1
                                }]
                            },
                            "options": {}
                        });
                    </script> */}
                </div>
            </div>
         
        </div>

        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
           
            <div className="bg-white border-transparent rounded-lg shadow-xl">
                <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                    <h2 className="font-bold uppercase text-gray-600">Graph</h2>
                </div>
                <div className="p-5">
                    <canvas id="chartjs-1" className="chartjs" width="undefined" height="undefined"></canvas>
                    {/* <script>
                        new Chart(document.getElementById("chartjs-1"), {
                            "type": "bar",
                            "data": {
                                "labels": ["January", "February", "March", "April", "May", "June", "July"],
                                "datasets": [{
                                    "label": "Likes",
                                    "data": [65, 59, 80, 81, 56, 55, 40],
                                    "fill": false,
                                    "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"],
                                    "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
                                    "borderWidth": 1
                                }]
                            },
                            "options": {
                                "scales": {
                                    "yAxes": [{
                                        "ticks": {
                                            "beginAtZero": true
                                        }
                                    }]
                                }
                            }
                        });
                    </script> */}
                </div>
            </div>
         
        </div>

        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
         
            <div className="bg-white border-transparent rounded-lg shadow-xl">
                <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                    <h5 className="font-bold uppercase text-gray-600">Graph</h5>
                </div>
                <div className="p-5"><canvas id="chartjs-4" className="chartjs" width="undefined" height="undefined"></canvas>
                    {/* <script>
                        new Chart(document.getElementById("chartjs-4"), {
                            "type": "doughnut",
                            "data": {
                                "labels": ["P1", "P2", "P3"],
                                "datasets": [{
                                    "label": "Issues",
                                    "data": [300, 50, 100],
                                    "backgroundColor": ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"]
                                }]
                            }
                        });
                    </script> */}
                </div>
            </div>
        
        </div>

            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            
                <div className="bg-white border-transparent rounded-lg shadow-xl">
                    <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                        <h2 className="font-bold uppercase text-gray-600">Graph</h2>
                    </div>
                    <div className="p-5">
                        <table className="w-full p-5 text-gray-700">
                            <thead>
                            <tr>
                                <th className="text-left text-blue-900">Name</th>
                                <th className="text-left text-blue-900">Side</th>
                                <th className="text-left text-blue-900">Role</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>Obi Wan Kenobi</td>
                                <td>Light</td>
                                <td>Jedi</td>
                            </tr>
                            <tr>
                                <td>Greedo</td>
                                <td>South</td>
                                <td>Scumbag</td>
                            </tr>
                            <tr>
                                <td>Darth Vader</td>
                                <td>Dark</td>
                                <td>Sith</td>
                            </tr>
                            </tbody>
                        </table>

                        <p className="py-2"><a href="#">See More issues...</a></p>

                    </div>
                </div>
            
            </div>

        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        
            <div className="bg-white border-transparent rounded-lg shadow-xl">
                <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                    <h2 className="font-bold uppercase text-gray-600">Advert</h2>
                </div>
                <div className="p-5 text-center">


                    <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CK7D52JJ&placement=wwwtailwindtoolboxcom" id="_carbonads_js"></script>


                </div>
            </div>
          
        </div>


        </div>
    </div>
</section>
  )
}
