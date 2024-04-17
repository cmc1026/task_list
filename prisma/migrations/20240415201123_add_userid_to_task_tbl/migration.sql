-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userid" INTEGER NOT NULL DEFAULT 1,
    "taskname" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "duedate" DATETIME NOT NULL
);
INSERT INTO "new_Task" ("desc", "duedate", "id", "taskname") SELECT "desc", "duedate", "id", "taskname" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
