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


import com.dao.XiaoshuozixunDao;
import com.entity.XiaoshuozixunEntity;
import com.service.XiaoshuozixunService;
import com.entity.vo.XiaoshuozixunVO;
import com.entity.view.XiaoshuozixunView;

@Service("xiaoshuozixunService")
public class XiaoshuozixunServiceImpl extends ServiceImpl<XiaoshuozixunDao, XiaoshuozixunEntity> implements XiaoshuozixunService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<XiaoshuozixunEntity> page = this.selectPage(
                new Query<XiaoshuozixunEntity>(params).getPage(),
                new EntityWrapper<XiaoshuozixunEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<XiaoshuozixunEntity> wrapper) {
		  Page<XiaoshuozixunView> page =new Query<XiaoshuozixunView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<XiaoshuozixunVO> selectListVO(Wrapper<XiaoshuozixunEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public XiaoshuozixunVO selectVO(Wrapper<XiaoshuozixunEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<XiaoshuozixunView> selectListView(Wrapper<XiaoshuozixunEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public XiaoshuozixunView selectView(Wrapper<XiaoshuozixunEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

}
