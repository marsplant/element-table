# element-table

- 项目地址

  https://marsplant.github.io/

- 项目结构

  - App.vue：

    实现项目主页面结构。主页面有一个左侧菜单栏和内容区，菜单栏使用vue-router模式，内容区通过router-view来分发内容。

  - components（存储通用组件）

    - form.vue：

      通用的表单组件，需要传入表单数据的对象和表单条目的数组，通过v-for遍历条目数组来构建el-form-item，在form-item中通过v-if选择相应的控件。

    - table.vue：

      通用的表格组件，组件由el-table控件和el-pagination控件组成。组件需要传入表格数据、表格列标签数组和配置数据（当前页位置，总条数，加载状态）。当编辑或者删除某条记录时，会向父组件传递相应的事件。当改变分页控件的页码时，会向父组件传递页码改变的事件，使得父组件改变表格数据。

  - views（存储router-view组件）

    - users.vue：

      项目创建时通过mock模块生成所有模拟的用户数据，保存在一个本地的数组中，getList方法从本地数组中筛选出当前页面的表格数据，并传入表格组件。

