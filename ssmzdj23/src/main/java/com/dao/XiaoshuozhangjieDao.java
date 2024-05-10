package com.dao;

import com.entity.XiaoshuozhangjieEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.XiaoshuozhangjieVO;
import com.entity.view.XiaoshuozhangjieView;


/**
 * 小说章节
 * 
 * @author 
 * @email 
 * @date 2021-03-13 11:26:32
 */
public interface XiaoshuozhangjieDao extends BaseMapper<XiaoshuozhangjieEntity> {
	
	List<XiaoshuozhangjieVO> selectListVO(@Param("ew") Wrapper<XiaoshuozhangjieEntity> wrapper);
	
	XiaoshuozhangjieVO selectVO(@Param("ew") Wrapper<XiaoshuozhangjieEntity> wrapper);
	
	List<XiaoshuozhangjieView> selectListView(@Param("ew") Wrapper<XiaoshuozhangjieEntity> wrapper);

	List<XiaoshuozhangjieView> selectListView(Pagination page,@Param("ew") Wrapper<XiaoshuozhangjieEntity> wrapper);
	
	XiaoshuozhangjieView selectView(@Param("ew") Wrapper<XiaoshuozhangjieEntity> wrapper);
	
}
