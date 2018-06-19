class CatTasksRequest extends RequestBase {
	@request_parameter()
	format: string;
	@request_parameter()
	node_id: string[];
	@request_parameter()
	actions: string[];
	@request_parameter()
	detailed: boolean;
	@request_parameter()
	parent_node: string;
	@request_parameter()
	parent_task: long;
	@request_parameter()
	headers: string[];
	@request_parameter()
	help: boolean;
	@request_parameter()
	sort_by_columns: string[];
	@request_parameter()
	verbose: boolean;
}
