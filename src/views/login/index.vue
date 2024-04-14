<script setup>
import { useUserStore } from '@/stores/user'
const router = useRouter()

const loginRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' },
  ],
}

// 控制登录按钮loading
const isLoading = ref(false)
const userStore = useUserStore()

let loginForm = reactive({
  username: '',
  password: '',
})

const dealLogin = () => {
  isLoading.value = true

  userStore
    .login(loginForm)
    .then(() => {
      ElMessage.success('登录成功')
      router.push({
        name: 'Workplace',
      })
    })
    .finally(() => {
      isLoading.value = false
    })
}
</script>

<template>
  <div class="login-wrap">
    <div class="login-card-cont">
      <img src="@/assets/images/logo.png" alt="" />

      <div class="login-form-cont">
        <el-form :model="loginForm" :rules="loginRules" @keyup.enter="dealLogin">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" prefix-icon="User" placeholder="请输入用户名" size="large" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              prefix-icon="Lock"
              placeholder="请输入密码"
              type="password"
              size="large"
              show-password
            />
          </el-form-item>
          <el-button type="primary" size="large" :loading="isLoading" @click="dealLogin"> 登录 </el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-wrap {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #f0f5ff 0%, #88b9bc 100%);

  .login-card-cont {
    width: 562px;
    margin-top: -10vh;
    background: #ffffff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: #88b9bc 1px 1px 1px;

    .login-form-cont {
      padding: 20px 50px 50px;

      .el-button {
        width: 100%;
      }
    }
  }
}
</style>
