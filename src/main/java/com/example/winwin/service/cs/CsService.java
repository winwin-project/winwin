package com.example.winwin.service.cs;

import com.example.winwin.dto.board.CsDto;
import com.example.winwin.mapper.board.CsMapper;
import com.example.winwin.vo.CsVo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CsService {

    private final CsMapper csMapper;

    public void register(CsDto csDto) {
//            csMapper.insert(csDto);
        if (csDto == null) {
            throw new IllegalArgumentException("게시판 정보가 없습니다.");
        }
        csMapper.insert(csDto);
    }

    public void remove(Long csNumber) {
        if (csNumber == null) {
            throw new IllegalArgumentException("게시판 번호 누락");
        }
        csMapper.delete(csNumber);
    }

    public void modify(CsDto csDto) {
        if (csDto == null) {
            throw new IllegalArgumentException("게시판 수정 정보 누락");
        }

        csMapper.update(csDto);
    }

    @Transactional(readOnly = true)
    public CsVo findCs(Long csNumber) {
        if (csNumber == null) {
            throw new IllegalArgumentException("게시판 번호 누락");
        }
        return Optional.ofNullable(csMapper.select(csNumber))
                .orElseThrow(() -> {
                    throw new IllegalArgumentException("존재하지 않는 게시물 번호");
                });
    }


    @Transactional(readOnly = true)
    public List<CsVo> findAll() {
        return csMapper.selectAll();
    }


}

