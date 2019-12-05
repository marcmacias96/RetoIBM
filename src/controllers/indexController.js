const math = require("mathjs");

module.exports = {
  getOrderedNumbers: async (req, res) => {
    const { elements } = req.body;
    elements.sort(function(a, b) {
      return a - b;
    });
    res.json({
      status: "success",
      message: "ok",
      data: { sorted: elements }
    });
  },
  getOperations: async (req, res) => {
    const { elements } = req.body;
    let count = 0;
    let average = 0,
      mode = 0,
      max = 0,
      min = 0,
      stddev = 0;
    let auxArray = [];
    elements.forEach(element => {
      if (!isNaN(element)) {
        auxArray.push(element);
        average = element + average;
        count++;
      }
    });
    average = average / count;
    mean = average;
    mode = math.mode(auxArray);
    max = Math.max(...auxArray);
    min = Math.min(...auxArray);
    stddev = math.std(auxArray);
    res.json({
      status: "success",
      message: "ok",
      data: {
        count,
        average,
        mean,
        mode,
        max,
        min,
        stddev
      }
    });
  }
};
