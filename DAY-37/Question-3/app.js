import os from "os";
import fs from "fs";

// ===== Part A: OS Module =====
console.log("Free Memory:", os.freemem());
console.log("Total CPU Cores:", os.cpus().length);

// ===== Part B: File System CRUD (Callback-based) =====

// 1. Create data.txt
fs.writeFile("data.txt", "Hello World", (err) => {
  if (err) {
    console.error("Error creating data.txt:", err.message);
    return;
  }

  // 2. Create Readme.md
  fs.writeFile("Readme.md", "## This is first line in Readme", (err) => {
    if (err) {
      console.error("Error creating Readme.md:", err.message);
      return;
    }

    // 3. Read data.txt
    fs.readFile("data.txt", "utf-8", (err, data) => {
      if (err) {
        console.error("Error reading data.txt:", err.message);
        return;
      }

      console.log("Content of data.txt:");
      console.log(data);

      // 4. Append second line to data.txt
      fs.appendFile("data.txt", "\nThis is second line", (err) => {
        if (err) {
          console.error("Error appending to data.txt:", err.message);
          return;
        }

        // 5. Delete Readme.md
        fs.unlink("Readme.md", (err) => {
          if (err) {
            console.error("Error deleting Readme.md:", err.message);
            return;
          }

          console.log("All operations completed successfully.");
        });
      });
    });
  });
});
