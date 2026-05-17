export const sourceMarkdown = `
- Claude Code 核心使用技巧
  掌握符号，效率提升10倍
  @image overview.svg
    - 会话管理
      避免上下文膨胀，保持会话干净
      @image session.svg
        - 一个会话一个任务，完成就 /clear
        - 复杂任务用 Plan 模式，避免盲目编码
        - 遇到问题先 /rewind 回退，再重新开始
    - 执行模式
      不同场景用不同思考深度
      @image execution.svg
        - 简单修改直接做，不需要 plan
        - 复杂任务用 spec 方式，先建规范文档
        - think / think hard / ultrathink 增强思考
    - 代码质量
      用工具链保障质量，不依赖人工
      @image quality.svg
        - 每个任务自动创建分支，处理完再合并
        - 使用 Hooks 和 pre-commit 本地检查
        - 任务完成后用 Subagent 做代码审查
    - 多任务协作
      同时处理多个任务的方法
      @image collaboration.svg
        - 使用 Worktree 同时处理多个任务
        - 多窗口同时运行不同项目
        - --dangerously-skip-permissions 跳过授权
    - 效率工具
      整理信息与配置管理
      @image efficiency.svg
        - 用 Claude Code 整理和搜集信息资料
        - /update-config 自然语言更新配置
        - /resume 恢复之前的会话继续工作
`;
