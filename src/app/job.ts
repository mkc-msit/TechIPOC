export interface IJob {
    sourceApp: string;
    jobId: number;
    jobName: string;
    lastRunDate: string;
    frequency: string;
    executionType: string;
    currentStatus: string;
}