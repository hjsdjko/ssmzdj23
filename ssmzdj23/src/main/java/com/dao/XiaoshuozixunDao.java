package com.dao;

import com.entity.XiaoshuozixunEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.XiaoshuozixunVO;
import com.entity.view.XiaoshuozixunView;


/**
 * 小说资讯
 * 
 * @author 
 * @email 
 * @date 2021-03-13 11:26:32
 */
public interface XiaoshuozixunDao extends BaseMapper<XiaoshuozixunEntity> {
	
	List<XiaoshuozixunVO> selectListVO(@Param("ew") Wrapper<XiaoshuozixunEntity> wrapper);
	
	XiaoshuozixunVO selectVO(@Param("ew") Wrapper<XiaoshuozixunEntity> wrapper);
	
	List<XiaoshuozixunView> selectListView(@Param("ew") Wrapper<XiaoshuozixunEntity> wrapper);

	List<XiaoshuozixunView> selectListView(Pagination page,@Param("ew") Wrapper<XiaoshuozixunEntity> wrapper);
	
	XiaoshuozixunView selectView(@Param("ew") Wrapper<XiaoshuozixunEntity> wrapper);
	
}
