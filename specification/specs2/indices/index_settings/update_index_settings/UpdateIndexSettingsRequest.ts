@class_serializer("IndexSettingsConverter")
class UpdateIndexSettingsRequest {
	index_settings: Map<string, any>;
	index: Indices;
}
