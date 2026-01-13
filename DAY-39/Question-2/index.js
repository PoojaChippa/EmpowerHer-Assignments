const express = require("express");
const os = require("os");
const dns = require("dns");
const readFileData = require("./read");

const app = express();
const PORT = 3000;

/* Test Route */
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

/* Read File Route */
app.get("/readfile", async (req, res) => {
  try {
    const data = await readFileData();
    res.send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});

/* System Details Route */
app.get("/systemdetails", (req, res) => {
  const cpus = os.cpus();

  res.json({
    platform: os.platform(),
    totalMemory: `${(os.totalmem() / 1024 ** 3).toFixed(2)} GB`,
    freeMemory: `${(os.freemem() / 1024 ** 3).toFixed(2)} GB`,
    cpuModel: cpus[0].model,
    cpuCores: cpus.length, // Bonus
  });
});

/* Get IP Route */
app.get("/getip", (req, res) => {
  dns.lookup("masaischool.com", { all: true }, (err, addresses) => {
    if (err) {
      res.status(500).send({ error: "DNS lookup failed" });
    } else {
      res.json({
        hostname: "masaischool.com",
        addresses,
      });
    }
  });
});

/* Server */
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
