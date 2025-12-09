import React from 'react';
import { 
  BarChart, Activity, Shield, Settings, Smartphone, 
  Globe, Battery, Database, AlertTriangle, CheckCircle2, 
  Droplets, Factory, Server, MapPin, Phone, Mail, QrCode,
  Zap, Clock, ArrowRight, ArrowDown, Users, Briefcase, FileText,
  Thermometer, LayoutDashboard, Wifi, XCircle, TrendingUp
} from 'lucide-react';

interface SlideFactoryProps {
  index: number;
}

// Helper components for layout
const SlideLayout: React.FC<{ title?: string; children: React.ReactNode; className?: string }> = ({ title, children, className = "" }) => (
  <div className={`w-full h-full p-12 flex flex-col relative ${className}`}>
    {title && (
      <div className="mb-8 border-b-4 border-brand pb-4">
        <h2 className="text-4xl font-bold text-zinc-800">{title}</h2>
      </div>
    )}
    <div className="flex-1 overflow-auto">
      {children}
    </div>
    {/* Footer Logo */}
    <div className="absolute bottom-6 right-8 opacity-20">
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-black"></div>
        <span className="font-bold tracking-widest text-sm">SHULIYUAN</span>
      </div>
    </div>
  </div>
);

const BulletPoint: React.FC<{ children: React.ReactNode; icon?: React.ReactNode }> = ({ children, icon }) => (
  <div className="flex items-start space-x-3 mb-4">
    <div className="mt-1 text-brand">
      {icon || <div className="w-2 h-2 rounded-full bg-brand mt-2" />}
    </div>
    <div className="text-xl leading-relaxed text-zinc-700 flex-1">
      {children}
    </div>
  </div>
);

export const SlideFactory: React.FC<SlideFactoryProps> = ({ index }) => {
  
  switch (index) {
    // Page 1: 封面
    case 0:
      return (
        <div className="w-full h-full bg-zinc-900 relative flex flex-col justify-center items-center text-white overflow-hidden">
            {/* Background Abstract */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand/20 to-transparent transform skew-x-12 origin-top-right pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-brand/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

            <div className="z-10 text-center space-y-8 max-w-4xl p-8 border border-white/10 bg-black/30 backdrop-blur-sm rounded-xl">
              <div className="w-20 h-20 bg-brand mx-auto mb-6 flex items-center justify-center text-4xl font-bold rounded shadow-lg shadow-brand/50">
                S
              </div>
              <h1 className="text-6xl font-bold tracking-tight">智能单点润滑器</h1>
              <h2 className="text-3xl text-zinc-300 font-light">Intelligent Single-Point Lubricator System</h2>
              
              <div className="w-24 h-1 bg-brand mx-auto my-8"></div>
              
              <p className="text-2xl font-medium tracking-wide">产品介绍展示</p>
              
              <div className="mt-12 text-zinc-400">
                <p className="text-lg">成都蜀利元机电有限公司</p>
                <p className="text-sm mt-2">2024年</p>
              </div>
            </div>
        </div>
      );

    // Page 2: 目录
    case 1:
      return (
        <SlideLayout title="目录 / Agenda" className="bg-zinc-50">
          <div className="flex h-full">
             <div className="w-1/2 pr-12 flex flex-col justify-center space-y-6">
                {[
                  "公司简介", "行业痛点分析", "润滑方式对比", "产品解决方案", "技术参数详解", 
                  "智能管理系统", "应用场景展示", "客户案例分享", "服务与支持"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md hover:translate-x-2 transition-all cursor-default border-l-4 border-transparent hover:border-brand">
                    <span className="text-2xl font-bold text-zinc-300 w-12 mr-4">0{idx + 1}</span>
                    <span className="text-xl font-semibold text-zinc-800">{item}</span>
                  </div>
                ))}
             </div>
             <div className="w-1/2 relative bg-zinc-200 rounded-xl overflow-hidden flex items-center justify-center">
                 <img src="https://picsum.photos/seed/lubricant/800/600" alt="Product Model" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply" />
                 <div className="absolute inset-0 bg-brand/20"></div>
                 <div className="relative z-10 bg-white/90 p-8 rounded-full shadow-2xl animate-pulse">
                    <Settings size={64} className="text-brand" />
                 </div>
             </div>
          </div>
        </SlideLayout>
      );

    // Page 3: 公司简介
    case 2:
      return (
        <SlideLayout title="公司简介 / About Us">
          <div className="grid grid-cols-2 gap-12 h-full items-center">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-brand mb-4">成都蜀利元机电有限公司</h3>
              <div className="space-y-4">
                <BulletPoint>成立于2015年，深耕行业近十年</BulletPoint>
                <BulletPoint>专注工业智能润滑系统研发与制造</BulletPoint>
                <BulletPoint>国家级高新技术企业</BulletPoint>
                <BulletPoint>拥有多项核心专利技术</BulletPoint>
              </div>

              <div className="bg-zinc-100 p-6 rounded-lg border-l-4 border-brand mt-8">
                <h4 className="font-bold text-lg mb-2">【使命 Mission】</h4>
                <p className="text-zinc-600">让工业设备润滑更智能、更高效、更安全</p>
                <div className="h-px bg-zinc-300 my-4"></div>
                <h4 className="font-bold text-lg mb-2">【愿景 Vision】</h4>
                <p className="text-zinc-600">成为工业智能润滑领域领先品牌</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className="bg-zinc-100 aspect-[4/3] rounded-lg flex items-center justify-center border border-zinc-200 shadow-inner">
                    <span className="text-zinc-400 text-sm font-semibold">资质证书 {i}</span>
                 </div>
               ))}
            </div>
          </div>
        </SlideLayout>
      );

    // Page 4: 行业痛点
    case 3:
      return (
        <SlideLayout title="行业痛点分析 / Pain Points">
          <div className="grid grid-cols-3 gap-8 h-full pt-8">
            <div className="bg-red-50 p-6 rounded-xl border border-red-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold text-red-800 mb-4">人工润滑问题</h3>
              <ul className="space-y-3 text-red-900/80">
                <li className="flex items-start"><span className="mr-2">•</span>油脂用量难控制（过多/过少）</li>
                <li className="flex items-start"><span className="mr-2">•</span>润滑周期不准确，依赖经验</li>
                <li className="flex items-start"><span className="mr-2">•</span>高空、危险区域作业风险高</li>
                <li className="flex items-start"><span className="mr-2">•</span>设备需停机润滑，影响产能</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 hover:shadow-lg transition-shadow">
               <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-6">
                <Activity size={32} />
              </div>
              <h3 className="text-2xl font-bold text-orange-800 mb-4">环境挑战</h3>
              <ul className="space-y-3 text-orange-900/80">
                <li className="flex items-start"><span className="mr-2">•</span>粉尘、潮湿、腐蚀性环境</li>
                <li className="flex items-start"><span className="mr-2">•</span>高温、低温极端工况影响</li>
                <li className="flex items-start"><span className="mr-2">•</span>振动、高速运行条件</li>
              </ul>
            </div>

            <div className="bg-zinc-100 p-6 rounded-xl border border-zinc-200 hover:shadow-lg transition-shadow">
               <div className="w-16 h-16 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-600 mb-6">
                <FileText size={32} />
              </div>
              <h3 className="text-2xl font-bold text-zinc-800 mb-4">管理难题</h3>
              <ul className="space-y-3 text-zinc-600">
                <li className="flex items-start"><span className="mr-2">•</span>润滑记录不完整，难以追溯</li>
                <li className="flex items-start"><span className="mr-2">•</span>故障预警不及时，后知后觉</li>
                <li className="flex items-start"><span className="mr-2">•</span>长期维护成本高，效率低下</li>
              </ul>
            </div>
          </div>
        </SlideLayout>
      );

    // NEW Page 4 (Index 4): 分布式润滑系统的优点
    case 4:
      return (
        <SlideLayout title="分布式润滑系统 vs 手动润滑">
          <div className="flex flex-col h-full space-y-8">
            
            {/* Top Chart Section */}
            <div className="w-full bg-zinc-50 rounded-xl p-6 shadow-inner relative overflow-hidden flex-1 max-h-[400px]">
              <div className="absolute top-6 left-6 font-bold text-zinc-700 z-10 bg-white/80 px-2 rounded">比较图示</div>
              
              {/* Chart Container */}
              <div className="relative h-full w-full flex items-center justify-center">
                 <svg viewBox="0 0 800 300" className="w-full h-full" preserveAspectRatio="none">
                    {/* Zones */}
                    <rect x="0" y="0" width="800" height="80" fill="#71717a" opacity="0.8" />
                    <rect x="0" y="220" width="800" height="80" fill="#d4d4d8" opacity="0.8" />
                    
                    {/* Labels */}
                    <text x="20" y="50" fill="white" fontSize="18" fontWeight="bold">过度润滑</text>
                    <text x="650" y="50" fill="black" fontSize="16">高温，跑冒滴漏</text>
                    
                    <text x="20" y="270" fill="#52525b" fontSize="18" fontWeight="bold">润滑不足</text>
                    <text x="650" y="270" fill="black" fontSize="16">磨损，意外停机</text>

                    {/* Manual Curve (Sawtooth) */}
                    <path d="M50,220 L100,50 L100,220 L150,50 L150,220 L200,50 L200,220 L250,50 L250,220 L300,50 L300,220 L350,50 L350,220" 
                          fill="none" stroke="#333" strokeWidth="2" strokeOpacity="0.8" />
                    {/* Manual Injection Gun Icon Simulation at points */}
                    <g transform="translate(100, 180) rotate(-45) scale(0.5)"><path d="M0 0 L20 0 L20 40 L0 40 Z" fill="#333" /></g>
                    <g transform="translate(200, 180) rotate(-45) scale(0.5)"><path d="M0 0 L20 0 L20 40 L0 40 Z" fill="#333" /></g>
                    <g transform="translate(300, 180) rotate(-45) scale(0.5)"><path d="M0 0 L20 0 L20 40 L0 40 Z" fill="#333" /></g>

                    {/* Distributed Curve (Sine Wave / Stable) */}
                    <path d="M50,150 Q100,120 150,150 T250,150 T350,150 T450,150 T550,150 T650,150 T750,150" 
                          fill="none" stroke="#FF6600" strokeWidth="8" strokeLinecap="round" />
                    
                    <text x="650" y="155" fill="#FF6600" fontSize="16" fontWeight="bold">稳定持续供油</text>

                    {/* Axis */}
                    <line x1="50" y1="290" x2="750" y2="290" stroke="black" strokeWidth="2" markerEnd="url(#arrow)" />
                    <text x="700" y="285" fontSize="14">时间</text>
                 </svg>
              </div>
            </div>

            {/* Bottom Comparison Columns */}
            <div className="grid grid-cols-2 gap-8 flex-1">
               {/* Left: Distributed Advantages */}
               <div className="bg-white rounded-lg shadow-sm border border-brand/20 overflow-hidden">
                  <div className="bg-zinc-800 text-white p-4 font-bold text-xl text-center flex items-center justify-center">
                    <CheckCircle2 className="mr-2 text-brand" /> 分布式润滑系统优点
                  </div>
                  <ul className="p-6 space-y-4 text-zinc-700">
                     <li className="flex items-start"><span className="text-brand mr-2">▶</span> 每日按照设定润滑量加注新鲜润滑剂；</li>
                     <li className="flex items-start"><span className="text-brand mr-2">▶</span> 无需巡检设备润滑状况；</li>
                     <li className="flex items-start"><span className="text-brand mr-2">▶</span> 完美实现润滑五定要求；</li>
                     <li className="flex items-start"><span className="text-brand mr-2">▶</span> 避免因为人为因素造成的加注过量和加注不足甚至遗漏；</li>
                     <li className="flex items-start"><span className="text-brand mr-2">▶</span> 较少人力成本或者降低人员劳动强度；</li>
                     <li className="flex items-start"><span className="text-brand mr-2">▶</span> 提高设备可靠性，进而提高生产效率；</li>
                     <li className="flex items-start"><span className="text-brand mr-2">▶</span> 避免因为润滑造成的轴承提前失效。</li>
                  </ul>
               </div>

               {/* Right: Manual Disadvantages */}
               <div className="bg-white rounded-lg shadow-sm border border-zinc-200 overflow-hidden">
                  <div className="bg-zinc-200 text-zinc-800 p-4 font-bold text-xl text-center flex items-center justify-center">
                    <XCircle className="mr-2 text-zinc-600" /> 人工手动润滑现状
                  </div>
                   <ul className="p-6 space-y-4 text-zinc-600">
                     <li className="flex items-start"><span className="text-zinc-400 mr-2">▶</span> 管理粗放，面对数量众多的设备管理难度大；</li>
                     <li className="flex items-start"><span className="text-zinc-400 mr-2">▶</span> 人为因素造成的加注过量和加注不足甚至遗漏经常发生；</li>
                     <li className="flex items-start"><span className="text-zinc-400 mr-2">▶</span> 为此付出的人力成本高；</li>
                     <li className="flex items-start"><span className="text-zinc-400 mr-2">▶</span> 间接造成的轴承提前失效以及生产损失。</li>
                  </ul>
               </div>
            </div>

          </div>
        </SlideLayout>
      );

    // Page 5 (Was 4): 解决方案
    case 5:
      return (
        <SlideLayout title="产品解决方案 / Solution">
           <div className="flex items-center justify-center h-full relative">
              {/* Central Product Placeholder */}
              <div className="w-48 h-48 bg-brand rounded-full flex items-center justify-center z-10 shadow-2xl relative">
                <Zap size={60} className="text-white animate-pulse" />
                <div className="absolute -bottom-10 text-center w-full font-bold text-zinc-800 text-lg">智能单点润滑器</div>
              </div>

              {/* Orbiting Features - Left Side */}
              <div className="absolute top-8 left-24 w-60 p-3 bg-white rounded-lg shadow-lg border-l-4 border-brand">
                 <div className="flex items-center mb-1 font-bold text-brand text-sm"><Smartphone className="mr-2" size={16}/> 远程智能控制</div>
                 <p className="text-xs text-zinc-600">手机APP + PC端管理平台，随时随地掌控设备。</p>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 left-8 w-60 p-3 bg-white rounded-lg shadow-lg border-l-4 border-brand">
                 <div className="flex items-center mb-1 font-bold text-brand text-sm"><Thermometer className="mr-2" size={16}/> 远程温度监测</div>
                 <p className="text-xs text-zinc-600">实时监控设备温度，预防过热故障。</p>
              </div>

              <div className="absolute bottom-8 left-24 w-60 p-3 bg-white rounded-lg shadow-lg border-l-4 border-brand">
                 <div className="flex items-center mb-1 font-bold text-brand text-sm"><Server className="mr-2" size={16}/> 多设备集中管理</div>
                 <p className="text-xs text-zinc-600">一键管理数百台设备，大幅降低管理难度。</p>
              </div>

              {/* Orbiting Features - Right Side */}
              <div className="absolute top-8 right-24 w-60 p-3 bg-white rounded-lg shadow-lg border-r-4 border-brand text-right">
                 <div className="flex items-center justify-end mb-1 font-bold text-brand text-sm">定时定量润滑 <Clock className="ml-2" size={16}/></div>
                 <p className="text-xs text-zinc-600">精准控制注油量 & 注油周期，告别经验主义。</p>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 right-8 w-60 p-3 bg-white rounded-lg shadow-lg border-r-4 border-brand text-right">
                 <div className="flex items-center justify-end mb-1 font-bold text-brand text-sm">远程振动监测 <Activity className="ml-2" size={16}/></div>
                 <p className="text-xs text-zinc-600">监测异常振动，提前发现机械隐患。</p>
              </div>

              <div className="absolute bottom-8 right-24 w-60 p-3 bg-white rounded-lg shadow-lg border-r-4 border-brand text-right">
                 <div className="flex items-center justify-end mb-1 font-bold text-brand text-sm">异常自动报警 <AlertTriangle className="ml-2" size={16}/></div>
                 <p className="text-xs text-zinc-600">微信/短信/APP多通道报警，故障早知道。</p>
              </div>

              {/* Connecting Lines (Simulated) */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                 <svg className="w-full h-full opacity-20">
                    {/* Left lines */}
                    <line x1="30%" y1="20%" x2="50%" y2="50%" stroke="#FF6600" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="25%" y1="50%" x2="50%" y2="50%" stroke="#FF6600" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="30%" y1="80%" x2="50%" y2="50%" stroke="#FF6600" strokeWidth="2" strokeDasharray="5,5" />
                    {/* Right lines */}
                    <line x1="70%" y1="20%" x2="50%" y2="50%" stroke="#FF6600" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="75%" y1="50%" x2="50%" y2="50%" stroke="#FF6600" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="70%" y1="80%" x2="50%" y2="50%" stroke="#FF6600" strokeWidth="2" strokeDasharray="5,5" />
                 </svg>
              </div>
           </div>
        </SlideLayout>
      );

    // Page 6 (Was 5): 型号对比
    case 6:
      return (
        <SlideLayout title="产品型号对比 / Models">
          <div className="mt-8 overflow-hidden rounded-xl shadow-lg border border-zinc-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand text-white relative z-20 shadow-md">
                  <th className="p-6 text-xl">型号参数</th>
                  <th className="p-6 text-xl text-center bg-brand-light">S500H-4G</th>
                  <th className="p-6 text-xl text-center bg-brand-dark">S500H-4G PRO</th>
                  <th className="p-6 text-xl text-center bg-brand-light">S500H-WIFI</th>
                </tr>
              </thead>
              <tbody className="text-lg">
                <tr className="bg-white hover:bg-zinc-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative hover:z-10">
                  <td className="p-6 font-bold text-zinc-700 border-b border-zinc-100">通讯方式</td>
                  <td className="p-6 text-center border-b border-zinc-100">4G cat-1</td>
                  <td className="p-6 text-center font-bold text-brand border-b border-zinc-100">4G cat-1</td>
                  <td className="p-6 text-center border-b border-zinc-100">WIFI</td>
                </tr>
                <tr className="bg-zinc-50 hover:bg-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative hover:z-10">
                  <td className="p-6 font-bold text-zinc-700 border-b border-zinc-200">油罐容量</td>
                  <td className="p-6 text-center border-b border-zinc-200" colSpan={3}>300ml / 500ml</td>
                </tr>
                <tr className="bg-white hover:bg-zinc-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative hover:z-10">
                  <td className="p-6 font-bold text-zinc-700 border-b border-zinc-100">工作压力</td>
                  <td className="p-6 text-center border-b border-zinc-100">0-10bar</td>
                  <td className="p-6 text-center font-bold text-brand border-b border-zinc-100">0-25bar</td>
                  <td className="p-6 text-center border-b border-zinc-100">0-10bar</td>
                </tr>
                <tr className="bg-zinc-50 hover:bg-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative hover:z-10">
                  <td className="p-6 font-bold text-zinc-700 border-b border-zinc-200">适用场景</td>
                  <td className="p-6 text-center border-b border-zinc-200">高负载 / 长周期</td>
                  <td className="p-6 text-center font-bold text-brand border-b border-zinc-200">极恶劣环境</td>
                  <td className="p-6 text-center border-b border-zinc-200">高负载 / 长周期</td>
                </tr>
                <tr className="bg-white hover:bg-zinc-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative hover:z-10">
                  <td className="p-6 font-bold text-zinc-700 border-b border-zinc-100">防护等级</td>
                  <td className="p-6 text-center border-b border-zinc-100">IP65</td>
                  <td className="p-6 text-center font-bold text-brand border-b border-zinc-100">IP68</td>
                  <td className="p-6 text-center border-b border-zinc-100">IP65</td>
                </tr>
                <tr className="bg-zinc-50 hover:bg-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative hover:z-10">
                  <td className="p-6 font-bold text-zinc-700 border-b border-zinc-200">外壳</td>
                  <td className="p-6 text-center border-b border-zinc-200" colSpan={3}>透明塑料</td>
                </tr>
                <tr className="bg-white hover:bg-zinc-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative hover:z-10">
                  <td className="p-6 font-bold text-zinc-700 border-b border-zinc-100">驱动方式</td>
                  <td className="p-6 text-center border-b border-zinc-100" colSpan={3}>电子机械微电机（可重复利用）</td>
                </tr>
                <tr className="bg-zinc-50 hover:bg-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative hover:z-10">
                  <td className="p-6 font-bold text-zinc-700 border-b border-zinc-200">电源方式</td>
                  <td className="p-6 text-center border-b border-zinc-200" colSpan={3}>外接5V-2A/ 5V 2.6Ah锂电池（可充电）/ 5V 2.9Ah干电池（防爆）</td>
                </tr>
                <tr className="bg-white hover:bg-zinc-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative hover:z-10">
                  <td className="p-6 font-bold text-zinc-700 border-b border-zinc-100">注油量</td>
                  <td className="p-6 text-center border-b border-zinc-100" colSpan={3}>
                    0.78-500ml(根据实际设置)
                  </td>
                </tr>
                <tr className="bg-zinc-50 hover:bg-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative hover:z-10">
                  <td className="p-6 font-bold text-zinc-700 border-b border-zinc-200">润滑周期</td>
                  <td className="p-6 text-center border-b border-zinc-200" colSpan={3}>
                    1-999小时（根据实际设置）
                  </td>
                </tr>
                <tr className="bg-white hover:bg-zinc-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative hover:z-10">
                  <td className="p-6 font-bold text-zinc-700 border-b border-zinc-100">环境温度</td>
                  <td className="p-6 text-center border-b border-zinc-100" colSpan={3}>-20℃ ~ +65℃</td>
                </tr>
                 <tr className="bg-zinc-50 hover:bg-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative hover:z-10">
                  <td className="p-6 font-bold text-zinc-700">噪音</td>
                  <td className="p-6 text-center" colSpan={3}>&lt;70dB(A)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SlideLayout>
      );

    // Page 7 (Was 6): 核心技术参数
    case 7:
      return (
        <SlideLayout title="核心技术参数 / Technical Specs">
          <div className="grid grid-cols-2 gap-8 h-full">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-100 flex flex-col justify-center">
               <div className="flex items-center text-brand mb-6">
                 <Settings className="mr-3" size={32} />
                 <h3 className="text-2xl font-bold">工作参数</h3>
               </div>
               <div className="space-y-4 pl-4 border-l-2 border-zinc-200">
                 <p><span className="font-bold text-zinc-700">工作压力：</span>0-10bar（最大）</p>
                 <p><span className="font-bold text-zinc-700">适用油脂：</span>NLGI 3#及以下</p>
                 <p><span className="font-bold text-zinc-700">排空时间：</span>个性化设置</p>
                 <p><span className="font-bold text-zinc-700">供油管长：</span>最长5米</p>
               </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-100 flex flex-col justify-center">
               <div className="flex items-center text-brand mb-6">
                 <Thermometer className="mr-3" size={32} />
                 <h3 className="text-2xl font-bold">环境适应性</h3>
               </div>
               <div className="space-y-4 pl-4 border-l-2 border-zinc-200">
                 <p><span className="font-bold text-zinc-700">工作温度：</span>-20℃ ~ 65℃</p>
                 <p><span className="font-bold text-zinc-700">防护等级：</span>IP65 / IP68</p>
                 <p><span className="font-bold text-zinc-700">防爆等级：</span>Ex ic IIC T4 Gc</p>
               </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-100 flex flex-col justify-center">
               <div className="flex items-center text-brand mb-6">
                 <Battery className="mr-3" size={32} />
                 <h3 className="text-2xl font-bold">电源与通讯</h3>
               </div>
               <div className="space-y-4 pl-4 border-l-2 border-zinc-200">
                 <p><span className="font-bold text-zinc-700">电源：</span>外接5V-2A / 5V 2.6Ah锂电池 / 5V 2.9Ah干电池</p>
                 <p><span className="font-bold text-zinc-700">续航：</span>1-2年（根据设置）</p>
                 <p><span className="font-bold text-zinc-700">通讯：</span>4G / NB-IoT / 蓝牙+网关</p>
               </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-100 flex flex-col justify-center">
               <div className="flex items-center text-brand mb-6">
                 <Factory className="mr-3" size={32} />
                 <h3 className="text-2xl font-bold">物理参数</h3>
               </div>
               <div className="space-y-4 pl-4 border-l-2 border-zinc-200">
                 <p><span className="font-bold text-zinc-700">油罐容量：</span>300ml / 500ml</p>
                 <p><span className="font-bold text-zinc-700">安装方式：</span>多种可选（直装/远程式）</p>
                 <p><span className="font-bold text-zinc-700">材质：</span>共聚多酯 + PAGF</p>
               </div>
            </div>
          </div>
        </SlideLayout>
      );

    // Page 8 (Was 7): 功能详解 - 远程控制
    case 8:
      return (
        <SlideLayout title="核心功能 - 远程智能控制">
          <div className="flex h-full gap-8">
            <div className="w-1/2 space-y-8 py-8">
               <div>
                  <h3 className="flex items-center text-2xl font-bold text-zinc-800 mb-4">
                    <Smartphone className="mr-3 text-brand" /> 手机小程序端
                  </h3>
                  <ul className="pl-12 space-y-2 text-zinc-600">
                    <li>• 实时设备状态查看 (油量/电量)</li>
                    <li>• 温度远程监测</li>
                    <li>• 振动远程监测</li>
                    <li>• 远程参数设置与修改</li>
                    <li>• 异常报警实时推送</li>
                    <li>• 润滑记录查询</li>
                  </ul>
               </div>

               <div>
                  <h3 className="flex items-center text-2xl font-bold text-zinc-800 mb-4">
                    <LayoutDashboard className="mr-3 text-brand" /> PC管理平台
                  </h3>
                   <ul className="pl-12 space-y-2 text-zinc-600">
                    <li>• 数百台设备集中管理看板</li>
                    <li>• 深度数据分析报表</li>
                    <li>• 用户权限分级管理</li>
                    <li>• 设备位置绑定</li>
                  </ul>
               </div>

               <div>
                  <h3 className="flex items-center text-2xl font-bold text-zinc-800 mb-4">
                    <Globe className="mr-3 text-brand" /> 云端服务
                  </h3>
                   <ul className="pl-12 space-y-2 text-zinc-600">
                    <li>• 数据安全存储与备份</li>
                    <li>• 多终端实时同步</li>
                    <li>• 软件OTA远程升级</li>
                  </ul>
               </div>
            </div>

            <div className="w-1/2 bg-zinc-100 rounded-xl flex items-center justify-center p-8 relative overflow-hidden">
               {/* Mockup UI */}
               <div className="bg-white w-64 h-[500px] border-8 border-zinc-800 rounded-[3rem] shadow-2xl flex flex-col overflow-hidden relative z-10">
                  <div className="bg-zinc-800 h-6 w-full flex justify-center"><div className="w-20 h-4 bg-black rounded-b-xl"></div></div>
                  <div className="flex-1 bg-zinc-50 p-4">
                     <div className="h-24 bg-brand rounded-xl mb-4 p-4 text-white">
                        <div className="font-bold text-lg">设备状态: 正常</div>
                        <div className="text-xs opacity-80">Device ID: 882910</div>
                     </div>
                     <div className="grid grid-cols-2 gap-2">
                        <div className="h-20 bg-white rounded shadow-sm"></div>
                        <div className="h-20 bg-white rounded shadow-sm"></div>
                        <div className="h-20 bg-white rounded shadow-sm"></div>
                        <div className="h-20 bg-white rounded shadow-sm"></div>
                     </div>
                  </div>
               </div>
               
               {/* PC Mockup behind */}
               <div className="absolute top-20 right-[-100px] w-[500px] h-[300px] bg-white border-8 border-zinc-800 rounded-xl shadow-xl z-0 opacity-80 flex flex-col overflow-hidden">
                   <div className="bg-zinc-100 border-b p-2 flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                   </div>
                   <div className="flex-1 bg-zinc-50 p-4 grid grid-cols-3 gap-4">
                      <div className="col-span-2 h-32 bg-blue-100/50 rounded"></div>
                      <div className="h-32 bg-green-100/50 rounded"></div>
                   </div>
               </div>
            </div>
          </div>
        </SlideLayout>
      );

    // Page 9 (Was 8): 核心功能 - 智能管理
    case 9:
      return (
        <SlideLayout title="核心功能 - 智能润滑管理">
          <div className="grid grid-cols-2 gap-8 h-full">
             <div className="space-y-6 pt-6">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                   <h3 className="text-xl font-bold text-blue-900 mb-2 flex items-center"><Clock className="mr-2"/> 定时定量润滑</h3>
                   <p className="text-blue-800/80">
                     打破传统人工加脂的随机性。系统支持毫升级注油量控制，时间精确到分钟，支持多种循环润滑模式。
                   </p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                   <h3 className="text-xl font-bold text-red-900 mb-2 flex items-center"><AlertTriangle className="mr-2"/> 智能预警系统</h3>
                   <div className="grid grid-cols-2 gap-2 text-sm text-red-800/80">
                      <span className="bg-white/50 px-2 py-1 rounded">● 油量不足预警</span>
                      <span className="bg-white/50 px-2 py-1 rounded">● 电池低电量预警</span>
                      <span className="bg-white/50 px-2 py-1 rounded">● 设备离线预警</span>
                      <span className="bg-white/50 px-2 py-1 rounded">● 管道堵塞/高压预警</span>
                   </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                   <h3 className="text-xl font-bold text-green-900 mb-2 flex items-center"><BarChart className="mr-2"/> 数据记录与分析</h3>
                   <p className="text-green-800/80">
                     润滑记录自动云端保存，支持导出Excel报表。通过长期数据分析，优化设备润滑策略，评估润滑效果。
                   </p>
                </div>
             </div>

             <div className="bg-white p-8 rounded-xl shadow border border-zinc-100 flex flex-col">
                <div className="font-bold text-zinc-500 mb-4">月度润滑数据分析</div>
                <div className="flex-1 flex items-end justify-between space-x-4 px-4 pb-4 border-b border-l border-zinc-300">
                   {[40, 65, 30, 85, 50, 70, 90].map((h, i) => (
                      <div key={i} className="w-full bg-brand/80 rounded-t hover:bg-brand transition-colors relative group" style={{height: `${h}%`}}>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          {h}%
                        </div>
                      </div>
                   ))}
                </div>
                <div className="flex justify-between text-xs text-zinc-400 mt-2 px-4">
                   <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
             </div>
          </div>
        </SlideLayout>
      );

    // Page 10 (Was 9): 智能管理系统 (架构)
    case 10:
      return (
        <SlideLayout title="智能润滑管理系统架构">
          <div className="flex flex-col h-full space-y-8">
            {/* Architecture Diagram */}
            <div className="flex items-center justify-between px-12">
               {/* Node 1 */}
               <div className="flex flex-col items-center">
                  <div className="w-32 h-32 bg-zinc-100 rounded-full flex items-center justify-center border-4 border-zinc-300 shadow-lg z-10">
                     <Settings size={48} className="text-zinc-600" />
                  </div>
                  <div className="mt-4 font-bold text-xl text-zinc-700">设备层</div>
                  <div className="text-sm text-zinc-500 text-center mt-2">传感器<br/>执行器</div>
               </div>

               <ArrowRight size={40} className="text-zinc-300" />

               {/* Node 2 */}
               <div className="flex flex-col items-center">
                  <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center border-4 border-blue-200 shadow-lg z-10">
                     <Activity size={48} className="text-blue-500" />
                  </div>
                  <div className="mt-4 font-bold text-xl text-blue-700">传输层</div>
                  <div className="text-sm text-zinc-500 text-center mt-2">4G / NB-IoT<br/>Bluetooth</div>
               </div>

               <ArrowRight size={40} className="text-zinc-300" />

                {/* Node 3 */}
               <div className="flex flex-col items-center">
                  <div className="w-32 h-32 bg-brand/10 rounded-full flex items-center justify-center border-4 border-brand shadow-lg z-10">
                     <Database size={48} className="text-brand" />
                  </div>
                  <div className="mt-4 font-bold text-xl text-brand">平台层</div>
                  <div className="text-sm text-zinc-500 text-center mt-2">云服务器<br/>数据处理</div>
               </div>

               <ArrowRight size={40} className="text-zinc-300" />

               {/* Node 4 */}
               <div className="flex flex-col items-center">
                  <div className="w-32 h-32 bg-green-50 rounded-full flex items-center justify-center border-4 border-green-200 shadow-lg z-10">
                     <LayoutDashboard size={48} className="text-green-500" />
                  </div>
                  <div className="mt-4 font-bold text-xl text-green-700">应用层</div>
                  <div className="text-sm text-zinc-500 text-center mt-2">Web / APP<br/>可视化看板</div>
               </div>
            </div>

            <div className="bg-zinc-50 rounded-xl p-8 mt-8 grid grid-cols-2 gap-8 border border-zinc-200">
               <div>
                  <h4 className="font-bold text-lg mb-4 border-l-4 border-brand pl-2">主要功能模块</h4>
                  <div className="grid grid-cols-2 gap-2 text-zinc-600">
                     <div className="bg-white p-2 rounded shadow-sm">1. 设备管理 (CRUD)</div>
                     <div className="bg-white p-2 rounded shadow-sm">2. 参数设置 (Plans)</div>
                     <div className="bg-white p-2 rounded shadow-sm">3. 状态监控 (Monitor)</div>
                     <div className="bg-white p-2 rounded shadow-sm">4. 报警管理 (Alerts)</div>
                     <div className="bg-white p-2 rounded shadow-sm">5. 报表中心 (Report)</div>
                     <div className="bg-white p-2 rounded shadow-sm">6. 用户管理 (Auth)</div>
                  </div>
               </div>
               <div>
                  <h4 className="font-bold text-lg mb-4 border-l-4 border-brand pl-2">通讯优势</h4>
                  <ul className="space-y-2 text-zinc-600">
                     <li><strong className="text-zinc-800">4G cat-1：</strong>高速率、广覆盖，适合大多数户外场景。</li>
                     <li><strong className="text-zinc-800">NB-IoT：</strong>低功耗、深覆盖、大连接，适合地下或隐蔽处。</li>
                     <li><strong className="text-zinc-800">蓝牙+网关：</strong>局域网安全传输，适合工厂内部密集部署。</li>
                  </ul>
               </div>
            </div>
          </div>
        </SlideLayout>
      );

    // Page 11 (Was 10): 应用场景 - 电动机
    case 11:
      return (
        <SlideLayout title="应用场景：电动机润滑">
          <div className="flex h-full gap-12 items-center">
             <div className="w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-xl aspect-square bg-zinc-200 flex items-center justify-center">
                    <img src="https://r2.erweima.ai/img/compressed/2ef03e87ec64b49419b4512534575975.jpg" alt="Motor" className="w-full h-full object-cover opacity-90" />
                    <div className="absolute top-4 left-4 bg-black/60 text-white px-4 py-1 rounded-full text-sm">驱动端轴承</div>
                    <div className="absolute bottom-4 right-4 bg-black/60 text-white px-4 py-1 rounded-full text-sm">非驱动端轴承</div>
                </div>
             </div>
             <div className="w-1/2 space-y-8">
                <div className="bg-red-50 p-6 rounded-lg">
                   <h4 className="font-bold text-red-800 mb-2 flex items-center"><AlertTriangle size={20} className="mr-2"/> 传统挑战</h4>
                   <ul className="text-red-900/80 space-y-2">
                      <li>• 油脂过多会导致线圈过热，甚至起火</li>
                      <li>• 油脂过少导致摩擦增大，轴承烧毁</li>
                      <li>• 需停机维护，影响生产线连续运行</li>
                      <li>• 人工涂抹不均匀</li>
                   </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                   <h4 className="font-bold text-green-800 mb-2 flex items-center"><CheckCircle2 size={20} className="mr-2"/> 智能方案优势</h4>
                   <ul className="text-green-900/80 space-y-2">
                      <li>• <span className="font-bold">定时定量精准润滑</span></li>
                      <li>• <span className="font-bold">不停机润滑</span>：运行状态下精准注油</li>
                      <li>• <span className="font-bold">延长寿命</span>：轴承寿命平均延长 2-3 倍</li>
                      <li>• <span className="font-bold">降本增效</span>：油脂消耗降低 30% 以上</li>
                   </ul>
                </div>
             </div>
          </div>
        </SlideLayout>
      );

    // Page 12 (Was 11): 应用场景 - 泵
    case 12:
      return (
        <SlideLayout title="应用场景：泵类设备">
          <div className="flex h-full gap-12 items-center flex-row-reverse">
             <div className="w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-xl aspect-square bg-zinc-200 flex items-center justify-center">
                    <img src="https://r2.erweima.ai/img/compressed/49c83664d95267a3f367e96585141209.jpg" alt="Pump Room" className="w-full h-full object-cover opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <p className="text-white">恶劣工况下的泵房环境</p>
                    </div>
                </div>
             </div>
             <div className="w-1/2 space-y-8">
                <div className="space-y-2">
                    <div className="font-bold text-zinc-500 uppercase tracking-widest">润滑点</div>
                    <div className="text-2xl font-bold">泵轴轴承 & 密封部位</div>
                </div>

                <div className="bg-zinc-100 p-6 rounded-lg border-l-4 border-zinc-400">
                   <h4 className="font-bold text-zinc-800 mb-2">环境恶劣，人工难为</h4>
                   <p className="text-zinc-600 mb-4">通常伴随高粉尘、潮湿甚至腐蚀性介质（酸碱）。人工操作不仅风险高，而且容易导致污染物进入润滑点。</p>
                   
                   <div className="h-px bg-zinc-300 w-full my-4"></div>

                   <h4 className="font-bold text-brand mb-2">解决方案核心价值</h4>
                   <ul className="space-y-2">
                      <li className="flex items-center"><Shield size={16} className="text-brand mr-2"/> 全密封设计，IP65/IP68防护，杜绝污染</li>
                      <li className="flex items-center"><Shield size={16} className="text-brand mr-2"/> 远程操作，人员无需进入危险区域</li>
                      <li className="flex items-center"><Shield size={16} className="text-brand mr-2"/> 自动精准注油，防止跑冒滴漏污染环境</li>
                   </ul>
                </div>
             </div>
          </div>
        </SlideLayout>
      );

    // Page 13 (Was 12): 应用场景 - 输送机
    case 13:
      return (
        <SlideLayout title="应用场景：输送机">
          <div className="flex flex-col h-full">
             <div className="h-1/2 bg-zinc-800 rounded-xl mb-8 relative overflow-hidden group">
                <img src="https://picsum.photos/seed/conveyor/1200/400" alt="Conveyor" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 bg-brand w-4 h-4 rounded-full animate-ping"></div>
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 bg-brand w-4 h-4 rounded-full border-2 border-white"></div>
                <div className="absolute top-1/4 right-1/4 bg-brand w-4 h-4 rounded-full animate-ping delay-75"></div>
                <div className="absolute top-1/4 right-1/4 bg-brand w-4 h-4 rounded-full border-2 border-white"></div>
                <div className="absolute bottom-6 left-6 text-white text-xl font-bold">长距离皮带输送机高空作业点</div>
             </div>

             <div className="grid grid-cols-2 gap-8 flex-1">
                <div className="bg-zinc-50 rounded-lg p-6">
                   <h3 className="text-xl font-bold mb-4">⚠️ 痛点：高空与分散</h3>
                   <ul className="list-disc list-inside space-y-2 text-zinc-600">
                      <li>润滑点通常位于高空，攀爬维护极其危险</li>
                      <li>输送线长，润滑点分散，人工巡检效率低</li>
                      <li>需不停机连续作业，人工润滑无法实施</li>
                      <li>防止污物进入润滑点</li>
                   </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-6 border border-orange-100">
                   <h3 className="text-xl font-bold mb-4 text-brand">✅ 优势：远程与集中</h3>
                   <ul className="space-y-3">
                      <li className="flex items-center text-zinc-800"><Wifi className="mr-2 text-brand"/> 远程监控，无需攀爬，保障人员安全</li>
                      <li className="flex items-center text-zinc-800"><Activity className="mr-2 text-brand"/> 运行中持续润滑，无需停机</li>
                      <li className="flex items-center text-zinc-800"><Server className="mr-2 text-brand"/> 集中管理系统，数百个点位状态一目了然</li>
                      <li className="flex items-center text-zinc-800"><Shield className="mr-2 text-brand"/> 全密封设计，防污物进入</li>
                   </ul>
                </div>
             </div>
          </div>
        </SlideLayout>
      );

    // Page 14 (Was 13): 客户案例
    case 14:
      return (
        <SlideLayout title="客户案例分享 / Case Studies">
          <div className="grid grid-cols-3 gap-6 h-full items-center">
            {/* Case 1 */}
            <div className="bg-white rounded-xl shadow-lg border-t-8 border-blue-500 h-[400px] flex flex-col p-6 hover:-translate-y-2 transition-transform">
               <div className="mb-4">
                 <h3 className="text-xl font-bold text-zinc-800">🏭 某大型造纸厂</h3>
                 <span className="text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded">制造业</span>
               </div>
               <div className="space-y-2 text-sm text-zinc-500 mb-6">
                  <p>应用设备：浆泵、真空泵</p>
                  <p>安装数量：86 台</p>
               </div>
               <div className="flex-1 bg-blue-50 rounded p-4 space-y-3">
                  <div className="font-bold text-blue-900 mb-2 border-b border-blue-200 pb-2">使用效果</div>
                  <div className="flex justify-between items-center"><span className="text-zinc-600">油脂消耗</span> <span className="text-green-600 font-bold">↓ 35%</span></div>
                  <div className="flex justify-between items-center"><span className="text-zinc-600">故障率</span> <span className="text-green-600 font-bold">↓ 52%</span></div>
                  <div className="flex justify-between items-center"><span className="text-zinc-600">年维护成本</span> <span className="text-green-600 font-bold">省 28万</span></div>
               </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white rounded-xl shadow-lg border-t-8 border-zinc-600 h-[400px] flex flex-col p-6 hover:-translate-y-2 transition-transform">
               <div className="mb-4">
                 <h3 className="text-xl font-bold text-zinc-800">⛰️ 某矿山企业</h3>
                 <span className="text-sm bg-zinc-200 text-zinc-800 px-2 py-0.5 rounded">能源矿产</span>
               </div>
               <div className="space-y-2 text-sm text-zinc-500 mb-6">
                  <p>应用设备：输送机、破碎机</p>
                  <p>安装数量：124 台</p>
               </div>
               <div className="flex-1 bg-zinc-100 rounded p-4 space-y-3">
                  <div className="font-bold text-zinc-900 mb-2 border-b border-zinc-300 pb-2">使用效果</div>
                  <p className="text-sm text-zinc-600">高空润滑点实现 100% 远程管理，彻底消除安全隐患。</p>
                  <div className="flex justify-between items-center"><span className="text-zinc-600">维护时间</span> <span className="text-green-600 font-bold">↓ 70%</span></div>
                  <div className="flex justify-between items-center"><span className="text-zinc-600">停机时间</span> <span className="text-green-600 font-bold">↓ 45%</span></div>
               </div>
            </div>

            {/* Case 3 */}
            <div className="bg-white rounded-xl shadow-lg border-t-8 border-brand h-[400px] flex flex-col p-6 hover:-translate-y-2 transition-transform">
               <div className="mb-4">
                 <h3 className="text-xl font-bold text-zinc-800">🏗️ 某钢铁集团</h3>
                 <span className="text-sm bg-orange-100 text-brand px-2 py-0.5 rounded">重工业</span>
               </div>
               <div className="space-y-2 text-sm text-zinc-500 mb-6">
                  <p>应用设备：电动机、鼓风机</p>
                  <p>安装数量：210 台</p>
               </div>
               <div className="flex-1 bg-orange-50 rounded p-4 space-y-3">
                  <div className="font-bold text-orange-900 mb-2 border-b border-orange-200 pb-2">使用效果</div>
                  <p className="text-sm text-zinc-600">实现 24小时不间断微量润滑。</p>
                  <div className="flex justify-between items-center"><span className="text-zinc-600">轴承温降</span> <span className="text-green-600 font-bold">平均 8℃</span></div>
                  <div className="flex justify-between items-center"><span className="text-zinc-600">人工成本</span> <span className="text-green-600 font-bold">省 65万/年</span></div>
               </div>
            </div>
          </div>
        </SlideLayout>
      );

    // Page 15 (Was 14): 使用说明
    case 15:
      return (
        <SlideLayout title="设备使用说明 / User Guide">
          <div className="flex h-full gap-8">
            <div className="w-1/2 space-y-6">
               <div className="bg-white rounded-xl p-6 shadow-sm">
                 <h3 className="text-lg font-bold text-brand mb-4">🔧 安装步骤</h3>
                 <div className="space-y-4">
                    {[
                      "选择安装位置并牢固固定支架",
                      "连接供油管（注意排空空气，最长5米）",
                      "安装装满油脂的油罐并接通电源",
                      "使用APP扫码绑定设备，设置润滑参数"
                    ].map((step, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-500 flex items-center justify-center font-bold mr-4">{i+1}</div>
                        <div className="text-zinc-700">{step}</div>
                      </div>
                    ))}
                 </div>
               </div>

               <div className="bg-white rounded-xl p-6 shadow-sm">
                 <h3 className="text-lg font-bold text-brand mb-4">🔄 更换油罐步骤</h3>
                 <div className="text-zinc-600 text-sm space-y-2">
                    <p>1. 关闭电源开关</p>
                    <p>2. 逆时针旋下旧油罐</p>
                    <p>3. 检查密封圈，更换新油罐（或填充油脂）</p>
                    <p>4. 顺时针旋紧，打开电源重置</p>
                 </div>
               </div>
            </div>

            <div className="w-1/2 bg-zinc-50 rounded-xl p-8 border border-zinc-200">
               <h3 className="text-lg font-bold text-zinc-800 mb-6 flex items-center"><Activity className="mr-2" /> LED状态指示灯说明</h3>
               <div className="space-y-4">
                  <div className="flex items-center bg-white p-3 rounded border-l-4 border-green-500">
                    <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse mr-4"></div>
                    <div><span className="font-bold">绿灯慢闪：</span> 正常运行</div>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded border-l-4 border-yellow-500">
                    <div className="w-4 h-4 rounded-full bg-yellow-500 animate-pulse mr-4"></div>
                    <div><span className="font-bold">黄灯快闪：</span> 电池电量低 / 油量接近耗尽</div>
                  </div>
                   <div className="flex items-center bg-white p-3 rounded border-l-4 border-red-500">
                    <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse mr-4"></div>
                    <div><span className="font-bold">红灯快闪：</span> 设备离线 / 高回压报警 / 堵塞</div>
                  </div>
               </div>
               
               <div className="mt-8 flex justify-center">
                   {/* Simplified Device Illustration */}
                   <div className="w-32 h-48 bg-zinc-200 rounded-t-full relative border-4 border-zinc-300">
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse"></div>
                      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-zinc-400 text-xs text-center w-full px-2">透明油罐<br/>可视液位</div>
                   </div>
               </div>
            </div>
          </div>
        </SlideLayout>
      );

    // Page 16 (Was 15): 服务与支持
    case 16:
      return (
        <SlideLayout title="服务与支持 / Service & Support">
          <div className="grid grid-cols-2 gap-8 h-full pt-8">
             <div className="flex items-start space-x-4">
                <div className="bg-brand/10 p-4 rounded-lg text-brand"><Shield size={40}/></div>
                <div>
                   <h3 className="text-xl font-bold mb-2">产品保障</h3>
                   <p className="text-zinc-600">主机质保期 3 年。提供终身维护服务，确保备件长期稳定供应。</p>
                </div>
             </div>

             <div className="flex items-start space-x-4">
                <div className="bg-brand/10 p-4 rounded-lg text-brand"><Phone size={40}/></div>
                <div>
                   <h3 className="text-xl font-bold mb-2">技术支持</h3>
                   <p className="text-zinc-600">7×24小时技术服务热线。提供远程故障诊断与指导，必要时提供现场技术支持。</p>
                </div>
             </div>

             <div className="flex items-start space-x-4">
                <div className="bg-brand/10 p-4 rounded-lg text-brand"><Users size={40}/></div>
                <div>
                   <h3 className="text-xl font-bold mb-2">培训服务</h3>
                   <p className="text-zinc-600">提供完整的产品操作培训、系统使用培训及日常维护保养培训。</p>
                </div>
             </div>

             <div className="flex items-start space-x-4">
                <div className="bg-brand/10 p-4 rounded-lg text-brand"><ArrowDown size={40}/></div>
                <div>
                   <h3 className="text-xl font-bold mb-2">升级服务</h3>
                   <p className="text-zinc-600">软件系统终身免费远程升级。针对特殊需求提供定制开发服务。</p>
                </div>
             </div>
          </div>
        </SlideLayout>
      );

    // Page 17 (Was 16): Q&A
    case 17:
      return (
        <SlideLayout title="Q&A & 联系方式">
          <div className="flex h-full gap-12">
            <div className="w-1/2">
               <h3 className="text-2xl font-bold mb-6 text-brand">常见问题</h3>
               <div className="space-y-6">
                  <div className="bg-white p-4 rounded shadow-sm border-l-4 border-zinc-300">
                     <p className="font-bold text-lg mb-2 text-zinc-800">Q：设备通讯中断怎么办？</p>
                     <p className="text-zinc-600">A：自动重连机制，支持离线存储。设备内置存储芯片，具备断点续传功能。</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm border-l-4 border-zinc-300">
                     <p className="font-bold text-lg mb-2 text-zinc-800">Q：电池能用多久？</p>
                     <p className="text-zinc-600">A：1-2年，标配高性能锂电池，支持低电量预警。</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm border-l-4 border-zinc-300">
                     <p className="font-bold text-lg mb-2 text-zinc-800">Q：支持哪些油脂类型？</p>
                     <p className="text-zinc-600">A：支持 NLGI 3#及以下大部分润滑脂。特殊油脂可咨询技术部。</p>
                  </div>
               </div>
            </div>

            <div className="w-1/2 bg-zinc-900 text-white rounded-xl p-8 flex flex-col justify-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand rounded-full blur-[100px] opacity-20"></div>
               
               <h3 className="text-2xl font-bold mb-8">联系我们 / Contact Us</h3>
               
               <div className="space-y-6 relative z-10">
                  <div className="flex items-center">
                     <Factory className="mr-4 text-brand" />
                     <div>
                        <div className="text-xs text-zinc-400">Company</div>
                        <div className="text-lg font-bold">成都蜀利元机电有限公司</div>
                     </div>
                  </div>
                  
                  <div className="flex items-center">
                     <MapPin className="mr-4 text-brand" />
                     <div>
                        <div className="text-xs text-zinc-400">Address</div>
                        <div className="text-lg">四川省成都市高新区</div>
                     </div>
                  </div>

                  <div className="flex items-center">
                     <Phone className="mr-4 text-brand" />
                     <div>
                        <div className="text-xs text-zinc-400">Tel</div>
                        <div className="text-lg">028-xxxxxxxx</div>
                     </div>
                  </div>

                  <div className="flex items-center">
                     <Globe className="mr-4 text-brand" />
                     <div>
                        <div className="text-xs text-zinc-400">Website</div>
                        <div className="text-lg">www.shuliyuan.com</div>
                     </div>
                  </div>

                  <div className="flex items-center">
                     <Mail className="mr-4 text-brand" />
                     <div>
                        <div className="text-xs text-zinc-400">Email</div>
                        <div className="text-lg">sales@shuliyuan.com</div>
                     </div>
                  </div>
               </div>

               <div className="absolute bottom-8 right-8 bg-white p-2 rounded">
                  <QrCode size={100} className="text-black" />
               </div>
            </div>
          </div>
        </SlideLayout>
      );

    // Page 18 (Was 17): End
    case 18:
      return (
        <div className="w-full h-full bg-brand relative flex flex-col justify-center items-center text-white overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
            <div className="z-10 text-center space-y-12 animate-fade-in-up">
              <h1 className="text-6xl font-bold tracking-tight">感谢观看</h1>
              
              <div className="w-20 h-1 bg-white mx-auto"></div>
              
              <div className="text-2xl font-light space-y-2">
                <p>智能润滑，高效运维</p>
                <p>让每一台设备都得到精准润滑</p>
              </div>
              
              <div className="bg-white text-brand px-8 py-4 rounded-full font-bold text-xl shadow-lg mt-12 inline-block">
                成都蜀利元机电有限公司
              </div>

               <div className="mt-8 flex flex-col items-center">
                  <div className="bg-white p-2 rounded-lg mb-2">
                    <QrCode size={80} className="text-black" />
                  </div>
                  <span className="text-sm opacity-80">扫码了解更多信息</span>
               </div>
            </div>
        </div>
      );

    default:
      return <div>Slide Not Found</div>;
  }
};