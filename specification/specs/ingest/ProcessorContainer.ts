class ProcessorContainer {
    attachment: AttachmentProcessor;
    append: AppendProcessor;
    csv: CsvProcessor;
    convert: ConvertProcessor;
    date: DateProcessor;
    date_index_name: DateIndexNameProcessor;
    dot_expander: DotExpanderProcessor;
    enrich: EnrichProcessor;
    fail: FailProcessor;
    foreach: ForeachProcessor;
    json: JsonProcessor;
    user_agent: UserAgentProcessor;
    kv: KeyValueProcessor;
    geoip: GeoIpProcessor;
    grok: GrokProcessor;
    gsub: GsubProcessor;
    join: JoinProcessor;
    lowercase: LowercaseProcessor;
    remove: RemoveProcessor;
    rename: RenameProcessor;
    script: ScriptProcessor;
    set: SetProcessor;
    sort: SortProcessor;
    split: SplitProcessor;
    trim: TrimProcessor;
    uppercase: UppercaseProcessor;
    urldecode: UrlDecodeProcessor;
    bytes: BytesProcessor;
    dissect: DissectProcessor;
    set_security_user: SetSecurityUserProcessor;
    pipeline: PipelineProcessor;
    drop: DropProcessor;
    circle: CircleProcessor;
}
