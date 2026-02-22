-- Modify "api_key" table
ALTER TABLE `opencoze`.`api_key` MODIFY COLUMN `id` bigint unsigned NOT NULL AUTO_INCREMENT COMMENT "Primary Key ID";
-- Modify "app_connector_release_ref" table
ALTER TABLE `opencoze`.`app_connector_release_ref` RENAME INDEX `idx_record_connector` TO `uniq_record_connector`;
-- Modify "app_draft" table
ALTER TABLE `opencoze`.`app_draft` RENAME COLUMN `Name` TO `name`;
-- Modify "app_release_record" table
ALTER TABLE `opencoze`.`app_release_record` RENAME COLUMN `Name` TO `name`;
-- Modify "knowledge_document_slice" table
ALTER TABLE `opencoze`.`knowledge_document_slice` MODIFY COLUMN `sequence` decimal(20,5) NOT NULL COMMENT "切片順序號, 從1開始";
-- Modify "model_entity" table
ALTER TABLE `opencoze`.`model_entity` MODIFY COLUMN `default_params` json NULL COMMENT "默認參數";
-- Modify "node_execution" table
ALTER TABLE `opencoze`.`node_execution` COMMENT "node 節點運行記錄，用於記錄每次workflow執行時，每個節點的狀態信息", COLLATE utf8mb4_0900_ai_ci;
-- Modify "prompt_resource" table
ALTER TABLE `opencoze`.`prompt_resource` MODIFY COLUMN `id` bigint unsigned NOT NULL AUTO_INCREMENT COMMENT "主鍵ID";
-- Modify "single_agent_draft" table
ALTER TABLE `opencoze`.`single_agent_draft` MODIFY COLUMN `id` bigint unsigned NOT NULL AUTO_INCREMENT COMMENT "Primary Key ID", RENAME INDEX `idx_agent_id` TO `uniq_agent_id`;
-- Modify "single_agent_version" table
ALTER TABLE `opencoze`.`single_agent_version` MODIFY COLUMN `id` bigint unsigned NOT NULL AUTO_INCREMENT COMMENT "Primary Key ID", RENAME INDEX `idx_agent_id_and_version_connector_id` TO `uniq_agent_id_and_version_connector_id`;
-- Modify "space_user" table
ALTER TABLE `opencoze`.`space_user` RENAME INDEX `uk_space_user` TO `uniq_space_user`;
-- Modify "template" table
ALTER TABLE `opencoze`.`template` MODIFY COLUMN `id` bigint unsigned NOT NULL AUTO_INCREMENT COMMENT "Primary Key ID", RENAME INDEX `idx_agent_id` TO `uniq_agent_id`;
-- Modify "user" table
ALTER TABLE `opencoze`.`user` AUTO_INCREMENT 888, MODIFY COLUMN `id` bigint unsigned NOT NULL AUTO_INCREMENT COMMENT "Primary Key ID", RENAME INDEX `idx_email` TO `uniq_email`, RENAME INDEX `idx_unique_name` TO `uniq_unique_name`;
-- Modify "variables_meta" table
ALTER TABLE `opencoze`.`variables_meta` RENAME INDEX `idx_project_key` TO `uniq_project_key`;
-- Modify "workflow_draft" table
ALTER TABLE `opencoze`.`workflow_draft` COMMENT "workflow 畫布草稿表，用於記錄workflow最新的草稿畫布信息";
-- Modify "workflow_execution" table
ALTER TABLE `opencoze`.`workflow_execution` COMMENT "workflow 執行記錄表，用於記錄每次workflow執行時的狀態";
-- Modify "workflow_meta" table
ALTER TABLE `opencoze`.`workflow_meta` COMMENT "workflow 元信息表，用於記錄workflow基本的元信息";
-- Modify "workflow_reference" table
ALTER TABLE `opencoze`.`workflow_reference` COMMENT "workflow 關聯關係表，用於記錄workflow 直接互相引用關係";
-- Modify "workflow_version" table
ALTER TABLE `opencoze`.`workflow_version` COMMENT "workflow 畫布版本信息表，用於記錄不同版本的畫布信息";
