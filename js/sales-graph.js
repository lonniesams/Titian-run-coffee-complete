document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("sales-graph");
    const ctx = canvas.getContext("2d");

    const salesData = [
        { category: "Jan-Mar", sales: 2005.0, color: "#FF5733" },
        { category: "Apr-Jun", sales: 1471.31, color: "#33FF57" },
        { category: "Jul-Sep", sales: 892.86, color: "#3357FF" },
        { category: "Oct-Dec", sales: 531.6, color: "#FFC300" },
    ];

    let isReset = false;

    function drawGraph(data) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const barWidth = 150;
        const gap = 50;
        const maxHeight = 300;
        const maxSales = Math.max(...data.map(d => d.sales));

        data.forEach((item, index) => {
            const barHeight = isReset ? 0 : (item.sales / maxSales) * maxHeight;
            const x = gap + index * (barWidth + gap);
            const y = canvas.height - barHeight;

            ctx.fillStyle = item.color;
            ctx.fillRect(x, y, barWidth, barHeight);

            ctx.fillStyle = "#000";
            ctx.textAlign = "center";
            ctx.fillText(item.category, x + barWidth / 2, canvas.height - 10);
            ctx.fillText(`$${item.sales.toFixed(2)}`, x + barWidth / 2, y - 10);
        });
    }

    drawGraph(salesData);

    document.getElementById("reset-graph").addEventListener("click", function () {
        isReset = !isReset;
        drawGraph(salesData);
    });
});
