// 全局状态
let currentRole = null;
let currentTask = null;
let uploadedFiles = {
  brief: false,
  content: false
};

// 角色数据
const roleData = {
  'merchant': '商家',
  'upstream-content': '上行内容',
  'downstream-content': '下行内容',
  'downstream-ad': '下行投流',
  'direct-supervisor': '直管'
};

// 任务数据
const taskData = {
  'brief': 'Brief 评估',
  'creator-selection': '智能选号',
  'content-audit': '内容审核',
  'publish-monitor': '发布节奏监测',
  'ad-evaluation': '投放评估',
  'ad-monitor': '投流进度监测',
  'review': '投后复盘'
};

// 导航到指定层级
function navigateToLevel(level) {
  document.querySelectorAll('.level-section').forEach(section => {
    section.classList.remove('active');
  });
  
  document.getElementById(`level${level}`).classList.add('active');
  
  // 更新面包屑
  updateBreadcrumb(level);
}

// 更新面包屑导航
function updateBreadcrumb(level) {
  const breadcrumb = document.getElementById('breadcrumb');
  let html = '<span class="breadcrumb-item">首页</span>';
  
  if (level >= 2 && currentRole) {
    html += `<span class="breadcrumb-item">${roleData[currentRole]}</span>`;
  }
  
  if (level >= 3 && currentTask) {
    html += `<span class="breadcrumb-item">${taskData[currentTask]}</span>`;
  }
  
  breadcrumb.innerHTML = html;
}

// 返回首页
function goHome() {
  currentRole = null;
  currentTask = null;
  uploadedFiles = { brief: false, content: false };
  
  // 重置上传状态
  resetUploadStatus();
  
  navigateToLevel(1);
}

// Level 1: 选择角色
function selectRole(role) {
  currentRole = role;
  const roleName = roleData[role];
  
  // 更新标题
  document.getElementById('selected-role-title').textContent = `${roleName} - 选择任务`;
  
  // 高亮选中的角色
  document.querySelectorAll('.role-card').forEach(card => {
    card.classList.remove('selected');
  });
  document.querySelector(`[data-role="${role}"]`).classList.add('selected');
  
  // 延迟一下让用户看到选择效果
  setTimeout(() => {
    navigateToLevel(2);
  }, 300);
}

// Level 2: 选择任务
function selectTask(task) {
  currentTask = task;
  
  // 如果选择的是"内容审核"，进入 Level 3
  if (task === 'content-audit') {
    navigateToLevel(3);
  } else {
    // 其他任务显示提示
    alert(`"${taskData[task]}"功能正在开发中...\n\n当前 Demo 仅展示"内容审核"流程`);
  }
}

// Level 3: 模拟上传文件
function simulateUpload(type) {
  const fileDiv = document.getElementById(`${type}-file`);
  const uploadDiv = document.getElementById(`${type}-upload`);
  const statusSpan = document.getElementById(`${type}-status`);
  const filenameSpan = document.getElementById(`${type}-filename`);
  
  // 模拟文件名
  const filenames = {
    brief: ['产品 Brief.docx', '营销需求.pdf', '品牌介绍.xlsx'],
    content: ['达人视频.mp4', '图文内容.jpg', '评测文档.docx']
  };
  
  const randomFilename = filenames[type][Math.floor(Math.random() * filenames[type].length)];
  filenameSpan.textContent = randomFilename;
  
  // 显示已上传状态
  uploadDiv.style.display = 'none';
  fileDiv.style.display = 'flex';
  statusSpan.textContent = '已上传';
  statusSpan.className = 'module-status uploaded';
  
  // 更新状态
  uploadedFiles[type] = true;
  
  // 检查是否两个都上传了
  checkAuditButton();
}

// 重置上传状态
function resetUploadStatus() {
  ['brief', 'content'].forEach(type => {
    document.getElementById(`${type}-upload`).style.display = 'block';
    document.getElementById(`${type}-file`).style.display = 'none';
    document.getElementById(`${type}-status`).textContent = '未上传';
    document.getElementById(`${type}-status`).className = 'module-status';
  });
}

// 检查是否可以开始审核
function checkAuditButton() {
  const btn = document.getElementById('startAuditBtn');
  if (uploadedFiles.brief && uploadedFiles.content) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

// Level 3 → Level 4: 开始审核
function startAudit() {
  if (!uploadedFiles.brief || !uploadedFiles.content) {
    alert('请先上传 Brief 和内容文档');
    return;
  }
  
  // 显示审核中动画
  const overlay = document.getElementById('auditingOverlay');
  const progressFill = document.getElementById('progressFill');
  const statusText = document.getElementById('statusText');
  
  overlay.style.display = 'flex';
  progressFill.style.width = '0%';
  
  // 模拟审核进度
  const steps = [
    '正在分析内容...',
    '检测敏感词...',
    '核对 Brief 卖点...',
    '检查文案准确性...',
    '评估内容质量...',
    '生成审核报告...'
  ];
  
  let step = 0;
  const interval = setInterval(() => {
    step++;
    const progress = (step / steps.length) * 100;
    progressFill.style.width = `${progress}%`;
    
    if (step < steps.length) {
      statusText.textContent = steps[step];
    }
    
    if (step >= steps.length) {
      clearInterval(interval);
      setTimeout(() => {
        overlay.style.display = 'none';
        navigateToLevel(4);
      }, 500);
    }
  }, 800);
}

// Level 4: 退回内容
function rejectContent() {
  const confirmed = confirm('确认要退回内容给直管吗？\n\n直管将收到修改通知');
  
  if (confirmed) {
    showToast('❌', '内容已退回给直管，等待修改后重新提交');
  }
}

// Level 4: 审核通过
function approveContent() {
  const confirmed = confirm('确认审核通过吗？\n\n内容将推送给商家并进行下一步流程');
  
  if (confirmed) {
    showToast('✅', '审核通过！内容已推送给商家');
  }
}

// 显示结果提示
function showToast(icon, message) {
  const toast = document.getElementById('resultToast');
  const toastIcon = document.getElementById('toastIcon');
  const toastMessage = document.getElementById('toastMessage');
  
  toastIcon.textContent = icon;
  toastMessage.textContent = message;
  toast.style.display = 'block';
  
  // 3 秒后自动隐藏
  setTimeout(() => {
    toast.style.display = 'none';
  }, 3000);
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  navigateToLevel(1);
});

// 键盘快捷键支持
document.addEventListener('keydown', (e) => {
  // ESC 返回首页
  if (e.key === 'Escape') {
    goHome();
  }
  
  // Alt + 数字 快速跳转
  if (e.altKey) {
    switch(e.key) {
      case '1':
        e.preventDefault();
        navigateToLevel(1);
        break;
      case '2':
        e.preventDefault();
        if (currentRole) navigateToLevel(2);
        break;
      case '3':
        e.preventDefault();
        if (currentTask) navigateToLevel(3);
        break;
      case '4':
        e.preventDefault();
        navigateToLevel(4);
        break;
    }
  }
});
