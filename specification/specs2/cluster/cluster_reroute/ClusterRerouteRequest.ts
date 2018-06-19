class ClusterRerouteRequest extends RequestBase {
	commands: ClusterRerouteCommand[];
	@request_parameter()
	dry_run: boolean;
	@request_parameter()
	explain: boolean;
	@request_parameter()
	retry_failed: boolean;
	@request_parameter()
	metric: string[];
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	timeout: Time;
}
