const http = require('http');

const server = http.createServer((request, response) => {
    response.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                td{
                    padding: 20px 40px;
                }
                table tr:nth-child(odd) {
                    background-color: #aef;
                }

                table tr:nth-child(even) {
                    backgound-color: #fcb;
                }
                table, td {
                    border-collapse: collapse;
                }
            </style>
        </head>
        <body>
            <table border='1'>
                <tr><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td></tr>
            </table>
            <script>
                let tds = document.querySelectorAll('td');
                tds.forEach(item => {
                    item.onclick = function() {
                        this.style.backgroundColor = '#000';
                    }
                });
            </script>
        </body>
        </html>
    `);
});

server.listen(9000, () => {
    console.log('服务启动成功!!');
});