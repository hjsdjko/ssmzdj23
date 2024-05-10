package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.XiaoshuozhangjieEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.XiaoshuozhangjieVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.XiaoshuozhangjieView;


/**
 * 小说章节
 *
 * @author 
 * @email 
 * @date 2021-03-13 11:26:32
 */
public interface XiaoshuozhangjieService extends IService<XiaoshuozhangjieEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<XiaoshuozhangjieVO> selectListVO(Wrapper<XiaoshuozhangjieEntity> wrapper);
   	
   	XiaoshuozhangjieVO selectVO(@Param("ew") Wrapper<XiaoshuozhangjieEntity> wrapper);
   	
   	List<XiaoshuozhangjieView> selectListView(Wrapper<XiaoshuozhangjieEntity> wrapper);
   	
   	XiaoshuozhangjieView selectView(@Param("ew") Wrapper<XiaoshuozhangjieEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<XiaoshuozhangjieEntity> wrapper);
   	
}

