/*
  Warnings:

  - A unique constraint covering the columns `[userId,user_agent]` on the table `tokens` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tokens_userId_user_agent_key" ON "tokens"("userId", "user_agent");
