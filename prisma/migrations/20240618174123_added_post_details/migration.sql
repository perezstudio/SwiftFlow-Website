/*
  Warnings:

  - Added the required column `category` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "markdown" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Post" ("banner", "createdAt", "excerpt", "id", "markdown", "slug", "thumbnail", "title", "updatedAt") SELECT "banner", "createdAt", "excerpt", "id", "markdown", "slug", "thumbnail", "title", "updatedAt" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
