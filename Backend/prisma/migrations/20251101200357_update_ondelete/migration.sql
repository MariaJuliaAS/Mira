-- DropForeignKey
ALTER TABLE "public"."activities" DROP CONSTRAINT "activities_course_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."timers" DROP CONSTRAINT "timers_course_id_fkey";

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "timers" ADD CONSTRAINT "timers_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
