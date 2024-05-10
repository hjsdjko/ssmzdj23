package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.DiscussshuchengDao;
import com.entity.DiscussshuchengEntity;
import com.service.DiscussshuchengService;
import com.entity.vo.DiscussshuchengVO;
import com.entity.view.DiscussshuchengView;

@Service("discussshuchengService")
public class DiscussshuchengServiceImpl extends ServiceImpl<DiscussshuchengDao, DiscussshuchengEntity> implements DiscussshuchengService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<DiscussshuchengEntity> page = this.selectPage(
                new Query<DiscussshuchengEntity>(params).getPage(),
                new EntityWrapper<DiscussshuchengEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<DiscussshuchengEntity> wrapper) {
		  Page<DiscussshuchengView> page =new Query<DiscussshuchengView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<DiscussshuchengVO> selectListVO(Wrapper<DiscussshuchengEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public DiscussshuchengVO selectVO(Wrapper<DiscussshuchengEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<DiscussshuchengView> selectListView(Wrapper<DiscussshuchengEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public DiscussshuchengView selectView(Wrapper<DiscussshuchengEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

}
