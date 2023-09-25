<script setup>
import Table from '../../common/Table.vue'
const data = {
  social: [
    {
      name: 'تلگرام',
      color: 'bg-sky-400',
      icon: 'fa-telegram-plane',
    },
    {
      name: 'ایمیل',
      color: 'bg-yellow-400',
      icon: 'md-email-outlined',
    },
    {
      name: 'تماس',
      color: 'bg-green-500',
      icon: 'bi-telephone-fill',
    },
  ],
  langs: [
    {
      name: 'جاوااسکریپت',
      color: 'hover:bg-yellow-400',
      icon: 'md-javascript-round',
    },
    {
      name: 'ریکت',
      color: 'hover:bg-sky-400',
      icon: 'co-react',
    },
    {
      name: 'لاراول',
      color: 'hover:bg-red-400',
      icon: 'co-laravel',
    },
    {
      name: 'پی اچ پی',
      icon: 'md-php-round',
      color: 'hover:bg-purple-400',
    },
  ],
}
</script>

<template>
  <div class="flex flex-col items-end p-10 space-y-2">
    <div class="group flex items-center">
      <router-link to="/admin-panel/add-admin">
        <button class="sidebar-btn my-2 px-4 w-auto hover:bg-blue-400 peer">
          ساخت کاربر جدید
        </button>
      </router-link>
    </div>
    <Table>
      <template #headers>
        <tr>
          <th scope="col" class="px-6 py-4">تکنولوژی ها</th>
          <th scope="col" class="px-6 py-4 w-32">راه های ارتباطی</th>
          <th scope="col" class="px-6 py-4 w-8">ویرایش</th>
          <th scope="col" class="px-6 py-4 w-16">نام</th>
          <th scope="col" class="px-6 py-4 w-9">#</th>
        </tr>
      </template>
      <template #items>
        <tr class="border-b divide-x-2" v-for="i in 20" :key="i">
          <td class="whitespace-nowrap px-6 py-4 flex space-x-3 justify-end">
            <div v-for="icon in data.langs" :key="icon.name">
              <v-icon :name="icon.icon" class="w-8 h-8" />
            </div>
          </td>

          <td class="whitespace-nowrap px-6 py-4">
            <div class="flex justify-end space-x-2">
              <div v-for="icon in data.social" :key="icon.name">
                <button :class="'sidebar-btn-hover p-1 ' + icon.color">
                  <v-icon :name="icon.icon" class="w-6 h-6" />
                </button>
              </div>
            </div>
          </td>
          <td class="whitespace-nowrap px-6 py-4">
            <router-link
              to="/admin-panel/edit-sample"
              class="flex items-center"
            >
              <v-icon
                name="hi-pencil"
                class="sidebar-btn bg-transparent mx-auto hover:bg-sky-300 text-gray-900 w-8 h-8"
              />
            </router-link>
          </td>
          <td class="whitespace-nowrap px-6 py-4">
            <a
              href="https://labkhand-carpet.ir"
              target="_blank"
              class="hover:text-sky-800"
            >
              فرش لبخند
            </a>
          </td>
          <td class="whitespace-nowrap px-6 py-4 font-medium">
            {{ i }}
          </td>
        </tr>
      </template>
    </Table>
  </div>
</template>
