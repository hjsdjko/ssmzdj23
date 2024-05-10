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


import com.dao.XiaoshuozhangjieDao;
import com.entity.XiaoshuozhangjieEntity;
import com.service.XiaoshuozhangjieService;
import com.entity.vo.XiaoshuozhangjieVO;
import com.entity.view.XiaoshuozhangjieView;

@Service("xiaoshuozhangjieService")
public class XiaoshuozhangjieServiceImpl extends ServiceImpl<XiaoshuozhangjieDao, XiaoshuozhangjieEntity> implements XiaoshuozhangjieService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<XiaoshuozhangjieEntity> page = this.selectPage(
                new Query<XiaoshuozhangjieEntity>(params).getPage(),
                new EntityWrapper<XiaoshuozhangjieEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<XiaoshuozhangjieEntity> wrapper) {
		  Page<XiaoshuozhangjieView> page =new Query<XiaoshuozhangjieView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<XiaoshuozhangjieVO> selectListVO(Wrapper<XiaoshuozhangjieEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public XiaoshuozhangjieVO selectVO(Wrapper<XiaoshuozhangjieEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<XiaoshuozhangjieView> selectListView(Wrapper<XiaoshuozhangjieEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public XiaoshuozhangjieView selectView(Wrapper<XiaoshuozhangjieEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

}
