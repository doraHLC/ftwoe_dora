import menuInfo from '../image/ic/ic_menu_info.png'
import menuList from '../image/ic/ic_menu_list.png'
import menuStrategy from '../image/ic/ic_menu_strategy.png'
import menuJob from '../image/ic/ic_menu_job.png'

export const MenuSide = () => {
  return (
        <>
            <input className='hidden' type="checkbox" id="sideMenu-switch" />
            <div className='menuSide_main'>
                <ul className='flex flex-col items-center'>
                    <li className='menuSide_item'>
                        <img
                            className='menuSide_item_icon'
                            src={menuInfo}
                            alt="menuInfo"
                        />
                        <p className='menuSide_item_txt'>關卡資訊</p>
                    </li>
                    <li className='menuSide_item'>
                        <img
                            className='menuSide_item_icon'
                            src={menuList}
                            alt="menuList"
                        />
                        <p className='menuSide_item_txt'>作品列表</p>
                    </li>
                    <li className='menuSide_item'>
                        <img
                            className='menuSide_item_icon'
                            src={menuStrategy}
                            alt="menuStrategy"
                        />
                        <p className='menuSide_item_txt'>攻略資源</p>
                    </li>
                    <li className='menuSide_item'>
                        <img
                            className='menuSide_item_icon'
                            src={menuJob}
                            alt="menuJob"
                        />
                        <p className='menuSide_item_txt'>求職專區</p>
                    </li>
                </ul>

                <label
                  className='menuSide_label'
                    htmlFor="sideMenu-switch">
                </label>
            </div>
        </>
  )
}
