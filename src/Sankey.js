google.charts.load('current', {'packages':['sankey']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');
        data.addRows([
          [ 'Applications', ' ', 5 ],
          //[ ' ', 'Still no Response', 5],
          //[ 'Still no Response', 'still nothing', 5],
          [ 'Applications', 'Contacted', 5 ],
          [ 'Contacted', 'Rejected', 3 ],
          [ 'Contacted', 'Interview', 2 ],
          [ 'Interview', 'Nothing ', 1],
          [ 'Interview', 'Offer', 1]
        ]);

        // Sets chart options.
        var colors = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
                  '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];

        var options = {
          height: 150,
          outerWidth: 800,
          sankey: {
            node: {
              colors: colors, 
              nodePadding: 30
            },
            link: {
              colorMode: 'gradient',
              colors: colors
            }
          }
        };

        // Instantiates and draws our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
        chart.draw(data, options);
      }