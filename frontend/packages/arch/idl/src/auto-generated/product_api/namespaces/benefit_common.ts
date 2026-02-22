/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type Int64 = string | number;

export enum AccountStatus {
  Available = 1,
  /** 賬戶付費不可用 */
  Unavailable = 2,
}

/** 權益流水狀態 */
export enum BenefitCostStatus {
  /** 已撤回 */
  Reverted = 0,
  /** 已成功 */
  Succeed = 1,
}

/** Benefit 所作用的實體類型 */
export enum BenefitEntityType {
  /** 企業下的所有設備 */
  EnterpriseAllDevices = 1,
  /** 企業下的所有終端 */
  EnterpriseAllCustomConsumer = 2,
  /** 單設備 */
  EnterpriseSingleDevice = 11,
  /** 單終端主題，由客戶自定義 */
  EnterpriseSingleCustomConsumer = 12,
  /** API */
  API = 13,
  /** Plugin */
  Plugin = 14,
  /** Voice */
  Voice = 15,
  /** Workflow */
  Workflow = 16,
  /** 火山語音通話實例 */
  VolcVoiceDurationInstance = 17,
  /** CozeUserID */
  CozeUserID = 18,
  /** CozeRole */
  CozeRole = 19,
  /** LongTermMemory */
  LongTermMemory = 20,
  /** 企業配置類
企業安心用配置 */
  EnterpriseConfConfidenceUsing = 51,
}

export enum BenefitExtensionApplyStatus {
  /** 申請中 */
  Auditing = 1,
  /** 已通過 */
  Approved = 2,
  /** 已拒絕 */
  Rejected = 3,
  /** 已過期 */
  Expired = 4,
  /** 已取消 */
  Canceled = 5,
}

/** 權益歷史記錄類型 */
export enum BenefitHistoryType {
  /** bot 消耗 */
  ChatWithBot = 1,
  TopUpCredit = 2,
  BounsCredit = 3,
  ChargeBack = 4,
  ChargeBackReverse = 5,
  WorkflowConsume = 6,
  /** 智能語音 */
  IntelligentVoice = 11,
  /** 釦子羅盤消耗 */
  Fornax = 12,
  EvaluateConsume = 41,
  EvaluateModelConsume = 42,
  /** 應用消耗 */
  ProjectConsume = 61,
}

/** 權益流水根節點類型 */
export enum BenefitRootHistoryType {
  /** bot 消耗 */
  BotConsume = 1,
  /** workflow 消耗 */
  WorkflowConsume = 2,
  /** 應用消耗 */
  ProjectConsume = 3,
  /** 智能語音 */
  IntelligentVoiceConsume = 4,
  /** 釦子羅盤消耗 */
  FornaxConsume = 5,
  /** 模型評測消耗 */
  EvaluateModelConsume = 6,
  /** 長期記憶 */
  LongTermMemoryConsume = 7,
  /** 插件消耗 */
  PluginConsume = 8,
}

/** 權益類型
 40 -59 免費次數
 60 - 99 限流
 100-109 資源點
 110-129 Fornax
 130-149 WorkSpace
 150-169 運維
 170-179 知識庫
 180-199 語音
 200-219 租戶相關
 220-229 發佈相關 */
export enum BenefitType {
  /** 海外 */
  MessageCredit = 1,
  UserFreeChat = 2,
  TopUpMessageCredit = 3,
  BonusMessageCredit = 4,
  /** 40 -59 免費次數 */
  Freetimes = 40,
  /** 評測免費次數 */
  EvaluateFree = 41,
  /** Workflow 測試運行免費次數 */
  WorkflowTestRunFree = 42,
  /** App 測試運行免費次數 */
  AppTestRunFree = 43,
  /** Plugin 測試運行免費次數 */
  PluginRunFree = 44,
  /** API 運行免費次數 */
  APIRunFree = 45,
  /** SDK 運行免費次數 */
  SDKRunFree = 46,
  /** 60 - 99 限流
模型 RPM 限流 */
  RateLimitModelRPM = 60,
  /** 模型 Input TPM 限流 */
  RateLimitModelInputTPM = 61,
  /** 模型 Output TPM 限流 */
  RateLimitModelOutputTPM = 62,
  /** 基礎模型 Input TPM 限流 */
  RateLimitModelInputTPMBasic = 63,
  /** 基礎模型 Output TPM 限流 */
  RateLimitModelOutputTPMBasic = 64,
  /** Plugin 運行 QPS 限流 */
  PluginRunQPS = 65,
  /** Plugin 運行併發度限流 */
  PluginRunParallel = 66,
  /** 圖像節點
Workflow 運行 QPS 限流 */
  WorkflowRunQPS = 67,
  /** Workflow 運行併發度限流 */
  WorkflowRunParallel = 68,
  /** API 運行 QPS 限流 */
  APIRunQPS = 70,
  /** 語音 QPS 限流 */
  VoiceQPS = 71,
  /** 語音併發度限流 */
  VoiceParallel = 72,
  /** 調用 tool 次數限流 */
  CallToolLimit = 73,
  /** 100-109 資源點
資源點總量 */
  ResourcePoint = 100,
  /** 免費資源點，廢棄 */
  FreeResourcePoint = 101,
  /** 火山購買的資源點 */
  VolcProResourcePoint = 102,
  /** 週期性資源點 */
  PeriodicResourcePoint = 103,
  /** 渠道遞減資源點 */
  ChannelResourcePoint = 104,
  /** 試算資源點 */
  CutAndTryResourcePoint = 109,
  /** 110-129 Fornax
Trace 用量 */
  TraceAmount = 111,
  /** Trace 存儲時長 */
  TraceStorageDuration = 112,
  /** 130-149 WorkSpace
Space 總量 */
  SpaceAmount = 131,
  /** Space 人數 */
  SpacePeopleNumber = 132,
  /** Space 下協作者人數 */
  SpaceCollaboratorNumber = 133,
  /** 150-169 運維
日誌存儲時長 */
  LogStorageDuration = 151,
  /** 日誌導出 */
  LogExport = 152,
  /** 170-179 知識庫
知識庫容量 */
  Capacity = 170,
  /** 180-199 語音
音色克隆總數 */
  VoiceCloneNumber = 180,
  /** 音色克隆基礎數量 */
  VoiceCloneNumberBasic = 181,
  /** 語音統一時長（系統音色） */
  VoiceUnifiedDurationSystem = 182,
  /** 語音統一時長（復刻音色） */
  VoiceUnifiedDurationCustom = 183,
  /** 200-219 租戶相關
席位數上限 */
  SeatNumberLimit = 200,
  /** 基礎席位數 */
  SeatNumberBasic = 201,
  /** 擴展席位數 */
  SeatNumberExtension = 202,
  /** 移除水印 */
  RemoveWatermark = 220,
  /** 240-269 配置
安心用 */
  ConfidenceUsing = 240,
  /** 270-300 實體對用戶是否可用
插件是否可用 */
  PluginAvailable = 270,
  /** 301-310 記憶庫
單記憶庫存儲的記憶條數上限 */
  LongTermMemoryNum = 301,
  /** 500
計費資源提示信息 */
  ResourcePromptInfo = 500,
}

/** 權益使用模式 */
export enum BenefitUseMode {
  /** 按額度使用 */
  ByQuota = 1,
  /** 無限使用 */
  Unlimited = 2,
  /** 不可用 */
  UnAvailable = 10,
}

export enum BotMode {
  SingleMode = 0,
  MutiAgent = 1,
  WorkflowMode = 2,
}

export enum ChargeItemCostType {
  /** 資源點抵扣 */
  ResourcePoint = 0,
  /** 人民幣抵扣 */
  CNY = 1,
}

export enum ChargeItemStatus {
  /** 啓用 */
  Valid = 1,
  /** 停用 */
  Invalid = 2,
}

export enum ChargeItemType {
  /** 1-99 模型相關 */
  ModelInputTPM = 1,
  ModelOutputTPM = 2,
  /** 100-199 語音相關 */
  VoiceClone = 100,
  VoiceStorage = 101,
  /** 200- */
  PluginRunQPS = 200,
  PluginRunParallel = 201,
}

export enum ChargeResourceEntityType {
  Model = 1,
  Plugin = 2,
  Voice = 3,
  RTC = 4,
  BotRequest = 5,
  Knowledge = 6,
  Seat = 7,
  ModelTPM = 8,
  WorkSpace = 9,
  LongTermMemory = 10,
}

/** Type爲BotRequest(5)的子類型SubType */
export enum ChargeResourceSubTypeBotRequest {
  /** 智能體調用 */
  AgentInvocation = 1,
}

/** Type爲Knowledge(6)的子類型SubType */
export enum ChargeResourceSubTypeKnowledge {
  /** 容量 */
  Capacity = 1,
}

/** Type爲LongTermMemory(10)的子類型SubType */
export enum ChargeResourceSubTypeLongTermMemory {
  /** 說明：記憶庫運行時計費 */
  Running = 1,
  /** 說明：記憶庫存儲時計費 */
  Storage = 2,
}

/** Type爲Model(1)的子類型SubType */
export enum ChargeResourceSubTypeModel {
  /** 輸入 */
  Input = 1,
  /** 輸出 */
  Output = 2,
}

/** Type爲ModelTPM(8)的子類型SubType */
export enum ChargeResourceSubTypeModelTPM {
  /** 輸入 */
  Input = 1,
  /** 輸出 */
  Output = 2,
}

/** Type爲Plugin(2)的子類型SubType */
export enum ChargeResourceSubTypePlugin {
  /** 自有插件 */
  SelfOwned = 1,
  /** 自有插件擴展包 */
  SelfOwnedExpansionPackage = 2,
  /** 三方插件 */
  ThirdPartyPlugin = 3,
  /** 萬有三方插件 */
  WanYouThirdPartyPlugin = 4,
  /** coze 自營插件【二方插件】 */
  CozeSecondPartyPlugin = 5,
}

/** Type爲RTC(4)的子類型SubType */
export enum ChargeResourceSubTypeRTC {
  /** 實時音視頻 */
  RealTimeAudioVideo = 1,
}

/** Type爲Seat(7)的子類型SubType */
export enum ChargeResourceSubTypeSeat {
  /** 成員數量 */
  MemberCnt = 1,
}

/** Type爲Voice(3)的子類型SubType */
export enum ChargeResourceSubTypeVoice {
  /** 聲音復刻 */
  VoiceCloning = 1,
  /** 語音合成 */
  SpeechSynthesis = 2,
  /** 語音識別 */
  SpeechRecognition = 3,
  /** 聲紋識別 */
  VoiceprintRecognition = 4,
}

/** Type爲WorkSpace(9)的子類型SubType */
export enum ChargeResourceSubTypeWorkSpace {
  /** 數量 */
  Quantity = 1,
  /** 人數 */
  PeopleNum = 2,
}

export enum ChargeResourceType {
  Model = 1,
  Plugin = 2,
}

/** 校驗結果。通常結合BenefitType */
export enum CheckResultType {
  Pass = 1,
  /** 超出限額 */
  OutOfLimitation = 2,
  /** 餘額/餘量不足 */
  InsufficientBalance = 3,
}

/** 權益校驗點位 */
export enum CheckType {
  /** 僅校驗用於權益餘量 */
  CheckCommon = 0,
  /** 對話（含Chatflow）開始。 */
  ChatStart = 1,
  /** 對話（含Chatflow）結束。對話結束後，上報對應對話結果 ErrCode */
  ChatFinish = 2,
  /** 調用模型前（通常爲chat_engine/runtime），通常做限流 */
  ModelCallBefore = 6,
  /** 模型執行完成（model_agent/llm_gateway），通常用量上報 */
  ModelExecDone = 7,
  /** workflow執行。通常爲非對話接口的workflow的執行前校驗，如試用次數 */
  WorkflowRunStart = 11,
  /** workflow執行。通常爲非對話接口的workflow執行後 */
  WorkflowRunFinish = 12,
  /** workflow中斷重入 */
  WorkflowRunResume = 13,
  /** 調用插件前，通常做限流 */
  PluginCallBefore = 16,
  /** 插件執行完成。通常爲插件用量上報 */
  PluginExecFinish = 17,
  /** 評測前（Fornax評測複用） */
  EvaluateBefore = 41,
  /** 評測結果裁判 */
  EvaluateJudge = 42,
  /** 語音消費結束時上報 */
  VoiceUseFinish = 51,
  /** 語音統一時長消耗上報 */
  VoiceUnifiedUseFinish = 52,
  /** Trace日誌落庫前，用於限額 */
  FornaxTraceBefore = 61,
  /** 知識庫調用前 */
  MemoryLibraryCallBefore = 71,
  /** 知識庫執行完成 */
  MemoryLibraryExecFinish = 72,
}

/** 權益流水對應消耗的資源類型 */
export enum ConsumeResourceType {
  /** 未知 */
  Unknown = 0,
  /** 模型 */
  Model = 1,
  /** 插件 */
  Plugin = 2,
  /** 語音（ASR/TTS） */
  Voice = 3,
  /** RTC */
  RTC = 4,
  /** 知識庫（暫不對外暴露該類型） */
  Dateset = 5,
  /** 長期記憶 */
  LongTermMemory = 6,
}

export enum CostBalanceType {
  Free = 1,
  ResourcePoint = 2,
  VoiceUnifiedDurationSystem = 3,
  VoiceUnifiedDurationCustom = 4,
  CNY = 5,
}

/** 權益流水的成本歸屬用戶類型 */
export enum CostUserType {
  /** 未知 */
  Unknown = 0,
  /** 企業（國內爲火山賬號） */
  Enterprise = 1,
  /** 個人用戶 */
  User = 2,
}

export enum CozeAccountType {
  /** 未知 */
  Unknown = 0,
  /** 組織賬號 */
  Organization = 1,
  /** 個人賬號 */
  Personal = 2,
}

/** 用戶權益套餐狀態 */
export enum CozeInstanceStaus {
  /** 運行中 */
  Running = 1,
  /** 退訂 */
  Unsubs = 2,
  /** 到期 */
  Expired = 3,
  /** 欠費 */
  Overdue = 4,
}

export enum DurationType {
  Day = 1,
  Month = 2,
  Year = 3,
}

export enum EntityBenefitStatus {
  /** 正常使用 */
  Valid = 1,
  /** 凍結使用 */
  Frozen = 3,
  /** 取消 */
  Cancel = 5,
  /** 待生效（此枚舉通過計算得出，數據庫中並無此項數據） */
  Pending = 6,
  /** 不可用 */
  Invalid = 8,
  /** 審覈中 */
  Auditing = 9,
}

export enum EntityPeriodType {
  /** 絕對時間 */
  AbsoluteTime = 1,
  /** 相對時間 */
  RelativeTime = 2,
}

export enum ExecutionMode {
  /** 發佈態/正式態 */
  Release = 0,
  /** 草稿態/調試態/編輯態。 */
  Draft = 1,
}

export enum ExtensionAuditorType {
  /** 官方 */
  Official = 1,
  /** 資源所有者 */
  ResourceOwner = 2,
}

export enum InstanceLimitStatus {
  /** 未受限 */
  UnLimited = 1,
  /** 受限中（欠費） */
  Limited = 2,
}

export enum InstanceStatus {
  /** 創建中, 理論上不會返回該狀態 */
  InstanceStatusCreating = 0,
  /** 運行中 */
  Running = 1,
  /** 創建失敗, 理論上不會返回該狀態 */
  InstanceStatusFailed = 2,
  /** 退訂回收 */
  UnsubsRecycled = 3,
  /** 到期關停 */
  ExpiredClosed = 4,
  /** 到期回收 */
  ExpiredRecycled = 5,
  /** 欠費關停 */
  InstanceStatusOverdueShutdown = 6,
  /** 欠費回收 */
  InstanceStatusOverdueRecycled = 7,
  /** 退訂關停 */
  InstanceStatusTerminatedShutdown = 8,
}

export enum LimitationTriggerUnit {
  Never = 0,
  Minute = 1,
  Hour = 2,
  Day = 3,
  Month = 4,
  Second = 5,
}

export enum LongTermMemoryType {
  BuildVolcanoMemory = 1,
  FetchVolcanoMemory = 2,
}

/** 用量維度標識（當前用於分賬） */
export enum MeasureDimensionType {
  Workspace = 1,
  Organization = 2,
}

export enum MonetizationEntityType {
  Bot = 0,
  Project = 1,
}

/** 權益流水的權益類型（用於對客） */
export enum OpenBenefitType {
  /** 未知 */
  Unknown = 0,
  /** 免費贈送（大類，包括插件試用次數等。對於國內，當前僅個人免費版有該類型） */
  Free = 1,
  /** 資源點 */
  ResourcePoint = 2,
  /** 語音統一時長（系統音色） */
  VoiceUnifiedDurationSystem = 3,
  /** 語音統一時長（復刻音色） */
  VoiceUnifiedDurationCustom = 4,
}

export enum OperateType {
  AddBenefit = 1,
  RefundSubscription = 2,
  RefundTopUp = 3,
  SubscriptionChargeBack = 4,
  TopUpChargeBack = 5,
  SubscriptionChargeBackReverse = 6,
  TopUpChargeBackReverse = 7,
}

export enum PluginBillType {
  /** 按次調用計費。適用於大多數插件 */
  ByCallTime = 0,
  /** 按時長計費（單位S）。適用於音樂生成、視頻編輯等 */
  ByDuration = 1,
  /** 按token數計費。適用於視頻生成 */
  ByTotalTokens = 2,
  /** 按輸入輸出token數計費。適用於播客插件 */
  ByInputOutputTokens = 3,
  /** 按通用用量計費。適用於單類用量上報 */
  ByCommCounter = 4,
  /** 插件本身不計費，由下游計費。 */
  NoneButByDownstream = 11,
}

/** 資源歸屬的實體類型 */
export enum ResBelongsToEntityType {
  /** 未知 */
  Unknown = 0,
  /** bot */
  Bot = 1,
  /** workflow */
  Workflow = 2,
  /** plugin */
  Plugin = 3,
  /** 應用。原Project */
  Application = 4,
  /** 模型 */
  Model = 5,
  /** 語音類（ASR/TTS） */
  Voice = 6,
}

export enum ResourcePackageInstanceStatus {
  /** 正常使用 */
  Valid = 1,
  /** 已過期 */
  Expired = 2,
  /** 未生效 */
  Invalid = 3,
  /** 已退款 */
  Refunded = 4,
  /** 已回收 */
  Recycled = 5,
}

export enum ResourceUsageStrategy {
  /** 無限制 */
  UnLimit = 1,
  /** 限制 */
  Forbidden = 2,
  /** 通過額度校驗 */
  ByQuota = 3,
}

/** 場景 */
export enum SceneType {
  /** 對話 */
  Chat = 1,
  /** workflow testrun */
  WorkflowTest = 2,
  /** 評測bot */
  EvaluateBot = 41,
  /** 評測模型 */
  EvaluateModel = 42,
}

export enum UserLevel {
  /** 免費版。 */
  Free = 0,
  /** 海外
PremiumLite */
  PremiumLite = 10,
  /** Premium */
  Premium = 15,
  PremiumPlus = 20,
  /** 國內
V1火山專業版 */
  V1ProInstance = 100,
  /** 個人旗艦版 */
  ProPersonal = 110,
  /** 團隊版 */
  Team = 120,
  /** 企業版 */
  Enterprise = 130,
}

export enum VoiceResType {
  /** 音色克隆 */
  VoiceClone = 1,
  /** 復刻語音-文字轉語音 */
  TTSCustom = 2,
  /** 系統語音-文字轉語音 */
  TTSSystem = 3,
  /** 流式語音識別 - 大模型 */
  ASRStream = 4,
  /** 錄音文件語音識別 - 大模型 */
  ASRFile = 5,
  /** 流式語音識別 - 小模型 */
  ASRStreamSmall = 6,
  /** 錄音文件語音識別 - 小模型 */
  ASRFileSmall = 7,
  /** 語音通話 音頻時長 */
  RTCVoice = 8,
  /** 對話式AI 音頻時長 */
  RTCDialogAI = 9,
  /** 視頻通話時長-4k */
  RTCVideoCall4K = 10,
  /** 視頻通話時長-2k */
  RTCVideoCall2K = 11,
  /** 視頻通話時長-1080P */
  RTCVideoCall1080P = 12,
  /** 視頻通話時長-720P */
  RTCVideoCall720P = 13,
  /** 視頻通話時長-360P */
  RTCVideoCall360P = 14,
  /** TTS 相關計費項 【20-40)
文字轉語音，按調用次數收費 - 小模型 */
  TTSSmall = 20,
  /** 語音能力（聲紋）計費項
聲紋能力 */
  VoicePrint = 60,
  /** 語音統一時長（系統音色） */
  VoiceUnifiedDurationSystem = 61,
  /** 語音統一時長（復刻音色） */
  VoiceUnifiedDurationCustom = 62,
}

export enum VolcanoUserType {
  Unknown = 0,
  RootUser = 1,
  BasicUser = 2,
}

export enum VolcInstanceType {
  /** 正常版本 */
  Normal = 1,
  /** 渠道版本 */
  Channel = 2,
}

export enum WorkflowMode {
  Unknown = 0,
  TestRun = 1,
  Released = 2,
}
/* eslint-enable */
