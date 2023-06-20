import React from 'react'
import {Routes, Route, Link} from 'react-router-dom';

import './visual_main.scss';

export default function VisualMain() {
  return (
    <div class="visual_main">
      <div class="visual_main_frame">
        <ul id="visual_main_ul" class="visual_trans_active">
            <li class="visual_main_li"><a href="#!"></a></li>
            <li class="visual_main_li"><a href="#!"></a></li>
            <li class="visual_main_li"><a href="#!"></a></li>
            <li class="visual_main_li"><a href="#!"></a></li>
          </ul>
          <div id="visual_prev_btn" class="btn">
            <i class="fas fa-chevron-left"></i>
          </div>
          <div id="visual_next_btn" class="btn">
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
  )
}
