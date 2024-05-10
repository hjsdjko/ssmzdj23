package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.XiaoshuozixunEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.XiaoshuozixunVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.XiaoshuozixunView;


/**
 * 小说资讯
 *
 * @author 
 * @email 
 * @date 2021-03-13 11:26:32
 */
public interface XiaoshuozixunService extends IService<XiaoshuozixunEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<XiaoshuozixunVO> selectListVO(Wrapper<XiaoshuozixunEntity> wrapper);
   	
   	XiaoshuozixunVO selectVO(@Param("ew") Wrapper<XiaoshuozixunEntity> wrapper);
   	
   	List<XiaoshuozixunView> selectListView(Wrapper<XiaoshuozixunEntity> wrapper);
   	
   	XiaoshuozixunView selectView(@Param("ew") Wrapper<XiaoshuozixunEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<XiaoshuozixunEntity> wrapper);
   	
}

