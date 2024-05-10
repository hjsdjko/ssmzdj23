package com.dao;

import com.entity.DiscussshuchengEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.DiscussshuchengVO;
import com.entity.view.DiscussshuchengView;


/**
 * 书城评论表
 * 
 * @author 
 * @email 
 * @date 2021-03-13 11:26:32
 */
public interface DiscussshuchengDao extends BaseMapper<DiscussshuchengEntity> {
	
	List<DiscussshuchengVO> selectListVO(@Param("ew") Wrapper<DiscussshuchengEntity> wrapper);
	
	DiscussshuchengVO selectVO(@Param("ew") Wrapper<DiscussshuchengEntity> wrapper);
	
	List<DiscussshuchengView> selectListView(@Param("ew") Wrapper<DiscussshuchengEntity> wrapper);

	List<DiscussshuchengView> selectListView(Pagination page,@Param("ew") Wrapper<DiscussshuchengEntity> wrapper);
	
	DiscussshuchengView selectView(@Param("ew") Wrapper<DiscussshuchengEntity> wrapper);
	
}
