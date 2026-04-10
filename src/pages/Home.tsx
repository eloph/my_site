import { Link } from "react-router-dom";

interface Course {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const courses: Course[] = [
  {
    id: "python",
    name: "Python基础",
    description: "学习Python编程语言的基础知识，包括语法、数据类型、控制结构和函数等。",
    icon: "🐍"
  },
  {
    id: "data-analysis",
    name: "数据分析技术",
    description: "学习数据分析的基本方法和工具，包括数据清洗、数据可视化和统计分析等。",
    icon: "📊"
  },
  {
    id: "data-collection",
    name: "数据采集与处理",
    description: "学习如何从不同来源采集数据，并进行预处理和清洗。",
    icon: "🕷️"
  },
  {
    id: "supply-chain",
    name: "供应链数据分析",
    description: "学习如何应用数据分析技术优化供应链管理。",
    icon: "📦"
  },
  {
    id: "database",
    name: "数据库原理与应用",
    description: "学习数据库的基本原理和SQL语言，以及数据库设计和管理。",
    icon: "💾"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">邓菲的个人学习页面</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 个人信息区 */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-blue-600 text-white">
            <h1 className="text-2xl font-bold">个人信息</h1>
          </div>
          <div className="border-t border-gray-200">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-4 md:mb-0 md:mr-6">
                  <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-4xl">👩‍💻</span>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold text-gray-900">邓菲</h2>
                  <p className="mt-1 text-lg text-gray-600">广东科学技术职业学院</p>
                  <p className="mt-1 text-lg text-gray-600">商学院 | 商务数据分析与应用专业</p>
                  <p className="mt-4 text-gray-600">
                    我是一名商务数据分析与应用专业的学生，热爱数据分析和编程，
                    希望通过这个页面记录和展示我的学习过程和成果。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 课程列表 */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">我的课程</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Link 
                key={course.id} 
                to={`/courses/${course.id}`}
                className="bg-white shadow hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden"
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{course.icon}</span>
                    <h3 className="text-lg font-medium text-gray-900">{course.name}</h3>
                  </div>
                  <p className="text-gray-600">{course.description}</p>
                  <div className="mt-4 text-blue-600 font-medium">
                    查看详情 →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}