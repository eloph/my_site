import { useParams, Link } from "react-router-dom";

interface Course {
  id: string;
  name: string;
  description: string;
  content: string;
  icon: string;
}

const courses: Course[] = [
  {
    id: "python",
    name: "Python基础",
    description: "学习Python编程语言的基础知识，包括语法、数据类型、控制结构和函数等。",
    content: "本课程将介绍Python的基本语法、数据结构、函数定义和调用、面向对象编程等内容。通过实践项目，掌握Python编程技能，为后续的数据分析课程打下基础。",
    icon: "🐍"
  },
  {
    id: "data-analysis",
    name: "数据分析技术",
    description: "学习数据分析的基本方法和工具，包括数据清洗、数据可视化和统计分析等。",
    content: `## 课程简介
《数据分析技术》是商务数据分析与应用专业的核心课程，旨在培养学生运用数据分析工具解决实际商务问题的能力。本课程将系统介绍数据分析的基本理论、方法和实践技能，使学生能够熟练使用Python相关库进行数据处理、分析和可视化。

## 学习目标
1. 掌握数据分析的基本概念和流程
2. 熟练使用Python库（NumPy、Pandas）进行数据处理和分析
3. 掌握数据可视化技术（Matplotlib、Seaborn）
4. 了解基本的统计分析方法和应用场景
5. 能够运用数据分析技术解决实际商务问题
6. 培养数据思维和分析报告撰写能力

## 课程大纲

### 第一章：数据分析基础
- 1.1 数据分析的概念和重要性
- 1.2 数据分析的流程和方法
- 1.3 数据类型和数据质量评估
- 1.4 数据分析工具介绍

### 第二章：Python数据分析库
- 2.1 NumPy库的使用
  - 数组操作和数学计算
  - 线性代数和随机数生成
- 2.2 Pandas库的使用
  - Series和DataFrame对象
  - 数据读取和写入
  - 数据清洗和预处理
  - 数据聚合和分组

### 第三章：数据可视化
- 3.1 Matplotlib库的使用
  - 基本图表类型（折线图、柱状图、饼图等）
  - 图表定制和美化
- 3.2 Seaborn库的使用
  - 统计图表（热力图、小提琴图等）
  - 数据分布可视化
- 3.3 交互式可视化工具介绍

### 第四章：统计分析方法
- 4.1 描述性统计分析
  - 集中趋势和离散程度
  - 相关性分析
- 4.2 推断性统计分析
  - 假设检验
  - 方差分析
- 4.3 预测分析基础
  - 线性回归
  - 时间序列分析

### 第五章：商务数据分析案例
- 5.1 销售数据分析
- 5.2 客户行为分析
- 5.3 市场趋势分析
- 5.4 供应链数据分析

### 第六章：数据分析报告撰写
- 6.1 报告结构和格式
- 6.2 数据可视化最佳实践
- 6.3 分析结果的解释和呈现
- 6.4 案例分析和报告撰写

## 先修课程
- Python基础
- 数据采集与处理
- 商务数据分析与应用基础

## 学习资源
- **教材**：《Python数据分析》（Wes McKinney著）
- **参考书籍**：《利用Python进行数据分析》、《Python数据科学手册》
- **在线资源**：Kaggle数据集、Python官方文档
- **工具**：Jupyter Notebook、Anaconda

## 考核方式
- 平时作业：30%
- 实验报告：20%
- 期中考试：20%
- 期末考试：30%

## 教学安排
- 理论教学：每周2课时
- 实验教学：每周2课时
- 总学时：64课时

## 学习建议
1. 课前预习相关理论知识
2. 课中认真听讲，积极参与讨论
3. 课后及时完成实验作业，巩固所学知识
4. 多动手实践，尝试分析真实数据集
5. 关注数据分析领域的最新发展和应用案例`,
    icon: "📊"
  },
  {
    id: "data-collection",
    name: "数据采集与处理",
    description: "学习如何从不同来源采集数据，并进行预处理和清洗。",
    content: "本课程将介绍网络爬虫技术，使用Python库如Requests和BeautifulSoup进行数据采集，以及数据清洗、转换和集成的方法。通过实践项目，掌握数据采集和处理的完整流程。",
    icon: "🕷️"
  },
  {
    id: "supply-chain",
    name: "供应链数据分析",
    description: "学习如何应用数据分析技术优化供应链管理。",
    content: "本课程将介绍供应链管理的基本概念，以及如何使用数据分析技术识别供应链中的问题和优化机会。通过案例分析，掌握供应链数据分析的方法和工具。",
    icon: "📦"
  },
  {
    id: "database",
    name: "数据库原理与应用",
    description: "学习数据库的基本原理和SQL语言，以及数据库设计和管理。",
    content: "本课程将介绍数据库的基本概念、关系型数据库模型、SQL语言、数据库设计和规范化等内容。通过实践操作，掌握数据库的查询、设计和管理技能。",
    icon: "💾"
  }
];

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900">课程不存在</h1>
          <p className="mt-4 text-gray-600">请检查课程ID是否正确。</p>
          <Link 
            to="/" 
            className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-blue-600">
                邓菲的个人学习页面
              </Link>
            </div>
            <div className="flex items-center">
              <Link 
                to="/" 
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                首页
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 课程详情 */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-blue-600 text-white">
            <div className="flex items-center">
              <span className="text-3xl mr-3">{course.icon}</span>
              <h1 className="text-2xl font-bold">{course.name}</h1>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">课程描述</h2>
              <p className="text-gray-600 mb-6">{course.description}</p>
              <h2 className="text-lg font-medium text-gray-900 mb-4">课程内容</h2>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-gray-600">{course.content}</p>
                <div className="mt-6 text-yellow-500">
                  <p>📝 内容正在补充中...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Link 
            to="/" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            ← 返回课程列表
          </Link>
        </div>
      </div>
    </div>
  );
}