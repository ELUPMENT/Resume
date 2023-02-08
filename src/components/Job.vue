<template>
<div class="content-bd">
  <div class="content-left">
    <section class="practice">
      <header class="section-hd">
        <span class="section-title-l"></span>
        <h2 class="section-title">工作经历</h2>
        <span class="section-title-r"></span>
      </header>
      <div class="section-bd">
        <JobItem :company="'杭州海康威视系统技术有限公司'" tag="work" time="2021.6 - now">
          <li class="project-1">
              <h3 class="project-name">
                <a href="#" target="_blank" title="Horizons"
                  >
                  访客管理
                  </a>
              </h3>
              <ol>
                <li class="project-2">
                  <div class="item-bd">
                    <div class="div-item">
                      <h3 class="project-des">【项目简介】</h3>
                      <p class="item-project-des">
                        面向园区场景下的访客预约管理系统，web端、手机H5端多端使用，优化园区来访安排。
                      </p>
                    </div>
                 
                    <div class="div-item">
                      <h3 class="project-des">【工作方向】</h3>
                      <ul class="section-content">
                        <li>
                          根据项目评审完成的交互设计稿、前端基线需求进行开发维护
                        </li>
                        <li>visitor web端&H5端重构</li>
                      </ul>
                    </div>
                    <div class="div-item">
                      <h3 class="project-des">【技术】</h3>
                      <ul class="section-content">
                        <li>
                          制定多端组件开发优化方案
                        </li>
                        <li>
                          访客表单不同场景下动态显示优化方案
                        </li>
                        <li>
                          复杂业务需求梳理评估以及从技术预研到实现
                        </li>
                        <li>
                          canvas实现手机端签名功能
                        </li>
                        <li>
                          前端性能优化方案
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ol>
            </li>
            <li class="project-1">
              <h3 class="project-name">
                <a href="#" target="_blank" title="Horizons"
                  >
                  安消一张图
                  </a>
              </h3>
              <ol>
                <li class="project-2">
                  <div class="item-bd">
                    <div class="div-item">
                      <h3 class="project-des">【项目简介】</h3>
                      <p class="item-project-des">
                        面向城市及园区安全消防业务，结合地图以及定制园区三维模型，结合公司安防设备，展示实时以及历史报警、设备、车辆、访客等详情信息为主。
                      </p>
                    </div>
                 
                    <div class="div-item">
                      <h3 class="project-des">【工作方向】</h3>
                      <ul class="section-content">
                        <li>
                          大屏看板、系统管理开发维护
                        </li>
                        <li>
                          完成gismap、Hmap、3D建模场景下web端与地图的交互业务
                        </li>
                        <li>
                          报警信息处理查看业务场景
                        </li>
                        <li>
                          大屏各个组件模块化，实现在vr场景下的编辑器中可拖拽，根据喜好布局看板内容的需求
                        </li>
                      </ul>
                    </div>
                    <div class="div-item">
                      <h3 class="project-des">【技术】</h3>
                      <ul class="section-content">
                        <li>
                          echarts技术从预研到实现
                        </li>
                        <li>
                          预研地图api、三维模型api结合实际业务实现需求
                        </li>
                        <li>
                          复杂业务需求梳理评估以及从技术预研到实现
                        </li>
                        <li>
                          前端性能优化方案
                        </li>
                        <li>
                          多种报警事件与控件交互解决方案
                        </li>
                        <li>
                          vue3
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ol>
            </li>
        </JobItem>
      </div>
    </section>
  </div>
  <div class="content-right">
    <section class="skill">
      <header class="section-hd">
        <span class="section-title-l"></span>
        <h2 class="section-title">自我介绍</h2>
        <span class="section-title-r"></span>
      </header>
      <!--技能:WEB端开发-->
      <div class="section-bd">
        <div class="item">
          <!-- <img
            style="width: 100%"
            @click="openImg"
            src="https://nibilin33.github.io/nibl-resume/static/work.webp"
          /> -->
        </div>
      </div>
    </section>
    <section class="skill">
      <header class="section-hd">
        <span class="section-title-l"></span>
        <h2 class="section-title">技能</h2>
        <span class="section-title-r"></span>
      </header>
      <!--技能:WEB端开发-->
      <div class="section-bd">
        <div class="item">
          <div class="item-bd">
            <ul class="section-content">
              <li>Javascript,Typescript,Html5,CSS</li>
              <li>Vue,Tailwindcss</li>
              <li>Webpack,Vite</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!--奖项/证书-->
    <section class="prize">
      <header class="section-hd">
        <span class="section-title-l"></span>
        <h2 class="section-title">奖项/证书</h2>
        <span class="section-title-r"></span>
      </header>
      <div class="section-bd">
        <div class="item">
          <div class="item-bd">
            <ul class="section-content">
              <li>2021年度海康威视软件产品研发中心明星组件奖</li>
              <!-- <li>2021年度海康威视软件产品研发中心热门组件奖</li> -->
              <li>CET4</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!--致谢-->
    <section class="thanks">
      <header class="section-hd">
        <span class="section-title-l"></span>
        <h2 class="section-title">致谢</h2>
        <span class="section-title-r"></span>
      </header>
      <div class="section-bd">
        <div class="item">
          <h2 style="font-weight: bold; line-height: 24px; margin-top: 10px">
            感谢在百忙之中阅读这份履历
          </h2>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script setup lang="ts">
import JobItem from "./JobItem.vue";

const openImg = (e) => {
  const { target } = e;
  if (target.currentSrc) {
    window.open(target.currentSrc);
  }
}
</script>
